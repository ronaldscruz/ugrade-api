import express from "express";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { SignInPayload } from "@interfaces/AuthTypes";
import User from "../models/User";
import { User as UserInterface } from "@interfaces/User";

class AuthController {
  /**
   * Regular user authentication process
   *
   * 1. Looks for an user with the email received
   * 2. Compares passwords
   * 3. Returns a jwt token
   */
  async signIn(req: express.Request, res: express.Response) {
    const requestSchema = Joi.object({
      email: Joi.string().required().email().error(new Error("Valid email required.")),
      password: Joi.string()
        .required()
        .min(8)
        .max(32)
        .error(new Error("Valid password required.")),
    });

    const { value: requestBody, error: joiErr } = requestSchema.validate(req.body);
    if (joiErr) return res.status(400).send({ message: joiErr.message });

    const { email, password } = requestBody as SignInPayload;

    const userWithThisEmail = (await User.findOne({ email })
      .populate("roles")
      .lean()
      .exec()) as UserInterface | null;
    if (!userWithThisEmail)
      return res.status(400).send({ message: "Invalid user credentials." });

    const passwordIsValid = bcrypt.compareSync(password, userWithThisEmail.password);
    if (!passwordIsValid)
      return res.status(400).send({ message: "Invalid user credentials." });

    const credentialsData = {
      email,
      roles: userWithThisEmail.roles,
    };

    const jwtSecret = process.env.UGRADE_JWT_SECRET || "#d@rth_v4d3r";

    const credentialsToken = jwt.sign(credentialsData, jwtSecret, {
      expiresIn: 28800,
    });

    return res.status(200).send({ token: credentialsToken });
  }
}

export default new AuthController();
