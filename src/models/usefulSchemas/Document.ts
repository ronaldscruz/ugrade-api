import mongoose from "mongoose";

const Schema = mongoose.Schema;

const documentSchema = new Schema({
	type: {
		type: Schema.Types.String,
		required: true,
		maxlength: [18, "Document type above maximum (18)"],
	},
	number: {
		type: Schema.Types.String,
		required: true,
		minlength: [2, "Document number length below minimum (2)"],
		maxlength: [32, "Document number length above maximum (32)"],
	},
});

export default documentSchema;
