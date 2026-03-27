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
const { validationResult } = require("express-validator");
const ngo_1 = __importDefault(require("../database/repository/ngo"));
const common_1 = require("../utils/common");
const NgoService = {
    addNgo: function (props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, address, city, type, email, phone } = props;
            try {
                let existingNgo = yield ngo_1.default.findNgo({ email });
                if (existingNgo) {
                    return (0, common_1.formatData)({ message: "NGO already exists." });
                }
                let newNgo = ngo_1.default.addNgo({
                    name,
                    address,
                    city,
                    type,
                    email,
                    phone,
                });
                return (0, common_1.formatData)({ newNgo, message: "NGO added to DB." });
            }
            catch (error) {
                console.error(error);
                throw (0, common_1.ApiError)("Not Found", "Error in submitting data.", error);
            }
        });
    },
    getNgo: (props) => __awaiter(void 0, void 0, void 0, function* () {
        const { type } = props.params;
        const { city } = props.query;
        try {
            let ngo;
            if (city) {
                ngo = yield ngo_1.default.getNgoByCity({ type, city });
            }
            else {
                ngo = yield ngo_1.default.getNgoByType({ type });
            }
            if (!ngo) {
                return (0, common_1.formatData)({ message: "NGO not found" });
            }
            return (0, common_1.formatData)(ngo);
        }
        catch (error) {
            console.error(error);
            throw (0, common_1.ApiError)("Not Found", "Error in fetching data.", error);
        }
    }),
};
exports.default = NgoService;
