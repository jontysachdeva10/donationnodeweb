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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const express_validator_1 = require("express-validator");
const ngo_1 = __importDefault(require("../service/ngo"));
router.post("/add", [
    (0, express_validator_1.body)("name", "Name is required").notEmpty(),
    (0, express_validator_1.body)("address", "Address is required").notEmpty(),
    (0, express_validator_1.body)("city", "City is required").notEmpty(),
    (0, express_validator_1.body)("type", "Type is required").notEmpty(),
    (0, express_validator_1.body)("email", "Email is required").isEmail(),
    (0, express_validator_1.body)("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const err = (0, express_validator_1.validationResult)(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() });
    }
    try {
        const { data } = yield ngo_1.default.addNgo(req.body);
        return res.json(data);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}));
router.get("/:type", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield ngo_1.default.getNgo(req);
        return res.json(data);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}));
exports.default = router;
