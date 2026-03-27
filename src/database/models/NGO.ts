import mongoose from "mongoose";

interface NGO {
  name: string;
  address: string;
  city: string;
  type: string;
  email: string;
  phone: string;
}

const ngoSchema = new mongoose.Schema({
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
  type: {
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
  },
});

const NGO = mongoose.model("ngo", ngoSchema);

export { NGO };
