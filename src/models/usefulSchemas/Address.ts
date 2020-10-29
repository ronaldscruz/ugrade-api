import mongoose from "mongoose";

const Schema = mongoose.Schema;

const addressSchema = new Schema({
	name: {
		type: Schema.Types.String,
		default: "Untitled Address",
		maxlength: [32, "Address name length above maximum (32)"],
	},
	country: {
		type: Schema.Types.String,
		required: true,
		maxlength: [32, "Country name length above maximum (32)"],
	},
	state: {
		type: Schema.Types.String,
		required: true,
		maxlength: [32, "State name length above maximum (32)"],
	},
	city: {
		type: Schema.Types.String,
		required: true,
		maxlength: [32, "City name length above maximum (32)"],
	},
	street: {
		type: Schema.Types.String,
		minlength: [8, "Street length below maximum (8)"],
		maxlength: [96, "Street length above maximum (96)"],
	},
	number: {
		type: Schema.Types.String,
		maxlength: [6, "Address number length above maximum (6)"],
	},
	postalCode: {
		type: Schema.Types.String,
		minlength: [4, "Street length below minimum (4)"],
		maxlength: [28, "Postal code length above maximum (28)"],
	},
});

export default addressSchema;
