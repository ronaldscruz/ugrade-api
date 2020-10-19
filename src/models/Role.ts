import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  title: String,
});

export default mongoose.model('role', roleSchema);

