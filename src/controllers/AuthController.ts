import express from 'express';
import Joi from "joi";

import { SignInPayload } from '../types/AuthTypes';

class AuthController {
  signIn(req: express.Request, res: express.Response) {
    const requestSchema = Joi.object({
      email: Joi.string().required().email().error(new Error("Valid email required")),
      password: Joi.string().required().error(new Error("Valid password required"))
    });

    const { value: requestValues, error: joiError } = requestSchema.validate(req.body);

    if (joiError) {
      res.status(400);
      res.send({ message: joiError.message });
    }

    const { email, password } = requestValues as SignInPayload;
  }

  forgotPassword(req: express.Request, res:express.Response) {
    
  }

  changePassword(req: express.Request, res:express.Response) {

  }
}

export default new AuthController();