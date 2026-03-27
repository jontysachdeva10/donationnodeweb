"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Donate = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// interface Donate {
//   name: string;
//   amount: string;
//   upi: string;
//   location: string;
//   phone: string;
//   email: string;
//   date: Date;
// }
const DonateSchema = new mongoose_1.default.Schema({
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
    amount: {
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
const Donate = mongoose_1.default.model("donate", DonateSchema);
exports.Donate = Donate;
