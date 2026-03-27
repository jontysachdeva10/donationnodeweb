"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickupRegister = void 0;
const { validationResult } = require("express-validator");
const Pickup_1 = require("../../database/models/Pickup");
const pickupRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, address, city, state, item, quantity, phone, email } = req.body;
    try {
        let pickup = new Pickup_1.Pickup({
            name,
            address,
            city,
            state,
            item,
            quantity,
            phone,
            email,
        });
        yield pickup.save();
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.pickupRegister = pickupRegister;
