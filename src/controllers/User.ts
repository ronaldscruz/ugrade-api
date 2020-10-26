import express from "express";
import Joi from "joi";
import bcrypt from "bcrypt";

import { CreateUserPayload } from "@interfaces/User";
import { mongoObjectId } from "../regex";
import Role from "../models/Role";
import User from "../models/User";

class UserController {
  /**
   * Regular user creation process
   *
   * @TODO: hooks to validate if roles exist, this validation
   * is currently being made only in this method
   */
  async create(req: express.Request, res: express.Response) {
    const requestSchema = Joi.object({
      email: Joi.string().required().email().error(new Error("Valid email required.")),
      password: Joi.string()
        .required()
        .min(8)
        .max(32)
        .error(new Error("Your password must have a minimum length of 8 and a maximum of 32.")),
      roles: Joi.array()
        .items(
          Joi.string()
            .required()
            .regex(mongoObjectId)
            .error(new Error("Invalid role inside roles list."))
        )
        .required()
        .error(new Error("At least 1 valid role required.")),
    });

    const { value: requestBody, error: joiErr } = requestSchema.validate(req.body);
    if (joiErr) return res.status(400).send({ message: joiErr.message });

    const { email, password, roles } = requestBody as CreateUserPayload;

    for (const role of roles) {
      const roleExists = (await Role.count({ _id: role })) > 0;
      if (!roleExists)
        return res.status(400).send({ message: "One of the received roles doesn't exist." });
    }

    const passwordHash = bcrypt.hashSync(password, 12);

    const finalUser = {
      email,
      password: passwordHash,
      roles,
    };

    try {
      await User.create(finalUser);
      return res.status(200).send({ email: finalUser.email });
    } catch (err) {
      return res.status(500).send({ message: "Something went wrong while creating the user." });
    }
  }
}

export default new UserController();
