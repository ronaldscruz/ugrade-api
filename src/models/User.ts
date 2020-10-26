import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: Schema.Types.String,
  password: Schema.Types.String,
  roles: [{ type: Schema.Types.ObjectId, ref: "role" }],
});

export default mongoose.model("user", userSchema);
