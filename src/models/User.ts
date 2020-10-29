import mongoose from "mongoose";

import addressSchema from "./usefulSchemas/Address";
import documentSchema from "./usefulSchemas/Document";

const Schema = mongoose.Schema;

const personSchema = new Schema({
	fullname: {
		type: Schema.Types.String,
		required: true,
		maxlength: [
			200,
			`Person name length above maximum (200). Something wrong? Please, contact ${process.env.UGRADE_CONTACT_EMAIL}`,
		],
	},
	birthdate: {
		type: Schema.Types.Date,
		required: true,
	},
	documents: [
		{
			type: documentSchema,
			required: true,
		},
	],
	addresses: [
		{
			type: addressSchema,
			required: true,
		},
	],
});

const userSchema = new Schema({
	email: {
		type: Schema.Types.String,
		required: true,
		maxlength: [120, "Email length above maximum (120)."],
	},
	password: {
		type: Schema.Types.String,
		required: true,
		minlength: [8, "Password length below minimum (8)"],
		maxlength: [32, "Password length above maximum (32)."],
	},
	avatar: {
		type: Schema.Types.String,
		maxlength: [255, "Avatar URL length above maximum (255)."],
	},
	personalInfo: {
		type: personSchema,
		required: true,
	},
	roles: [{ type: Schema.Types.ObjectId, ref: "role", required: true }],
});

export default mongoose.model("user", userSchema);
