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
exports.getNgo = exports.addNgo = void 0;
const { validationResult } = require("express-validator");
const NGO_1 = require("../../database/models/NGO");
/**
 * @description ADD NGO
 */
const addNgo = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, address, city, type, email, phone } = req.body;
        try {
            let ngo = yield NGO_1.NGO.findOne({ email }); // findOne returns a promise, so instead, we are using async/await & using try-catch to handle response and errors
            if (ngo) {
                return res.status(400).json({ errors: [{ msg: "NGO already exist" }] });
            }
            ngo = new NGO_1.NGO({
                name,
                address,
                city,
                type,
                email,
                phone,
            });
            yield ngo.save();
            res.json(ngo);
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Server not found");
        }
    });
};
exports.addNgo = addNgo;
/**
 * @description GET NGO
 */
const getNgo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type } = req.params;
        const { city } = req.query;
        let ngo;
        if (city) {
            ngo = yield NGO_1.NGO.find({ type, city });
        }
        else {
            ngo = yield NGO_1.NGO.find({ type });
        }
        if (!ngo) {
            return res.status(404).json({ msg: "NGO not found" });
        }
        res.json(ngo);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: error.message });
    }
});
exports.getNgo = getNgo;
