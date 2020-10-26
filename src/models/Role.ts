import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roleSchema = new Schema({
  title: Schema.Types.String,
});

export default mongoose.model("role", roleSchema);
