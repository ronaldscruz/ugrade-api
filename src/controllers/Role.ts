import express from 'express';
import Joi from 'joi';

import Role from '../models/Role';
import { CreateRolePayload } from '@interfaces/Role';

class RoleController {
    /**
     * Simple role creation process
     */
    async create(req: express.Request, res: express.Response) {
        if (!req.body) return res.status(400).send({ message: "No parameters received." });

        const requestSchema = Joi.object({
            title: Joi.string().required().error(new Error("Role title is mandatory."))
        });

        const { value: requestBody, error: joiErr } = requestSchema.validate(req.body);
        if (joiErr) return res.status(400).send({ message: joiErr.message });

        const { title } = requestBody as CreateRolePayload;

        const createdRole = await Role.create({ title });

        return res.status(200).send(createdRole);
    }
}

export default new RoleController();