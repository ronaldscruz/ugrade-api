import mongoose from "mongoose";
import slugify from "slugify";

const Schema = mongoose.Schema;

const roleSchema = new Schema({
	title: {
		type: Schema.Types.String,
		required: true,
		maxlength: [48, "Role title length above maximum (48)"],
	},
	code: {
		type: Schema.Types.String,
	},
});

roleSchema.pre("save", function (next) {
	try {
		const slugifiedTitle = slugify(this.get("title"), {
			replacement: "_",
			locale: "pt-BR",
		}).toUpperCase();

		this.set("code", slugifiedTitle);

		next();
	} catch (err) {
		console.log("Failed generating code from role title. Please, try with another title.");
	}
});

export default mongoose.model("role", roleSchema);
