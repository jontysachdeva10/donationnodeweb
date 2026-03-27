import mongoose from "mongoose";

interface User {
  name: string;
  address: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  date: Date;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

export { User };
// module.exports = User = new Model('user', UserSchema);
