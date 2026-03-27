import mongoose from "mongoose";

interface Pickup {
  name: string;
  address: string;
  city: string;
  state: string;
  item: string;
  quantity: string;
  phone: string;
  email: string;
  date: Date;
}

const PickupSchema = new mongoose.Schema({
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
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Pickup = mongoose.model("pickup", PickupSchema);

export { Pickup };
