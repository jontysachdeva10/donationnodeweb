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
const common_1 = require("../../utils/common");
const NGO_1 = require("../models/NGO");
const NgoRepository = {
    findNgo: ({ email }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let ngo = yield NGO_1.NGO.findOne({ email });
            return ngo;
        }
        catch (error) {
            console.error(error);
            throw (0, common_1.ApiError)("Internal Error", "NGO could not found.", error);
        }
    }),
    addNgo: ({ name, address, city, type, email, phone }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let ngo = new NGO_1.NGO({
                name,
                address,
                city,
                type,
                email,
                phone,
            });
            return yield ngo.save();
        }
        catch (error) {
            console.error(error);
            throw (0, common_1.ApiError)("Internal Error", "NGO could not be saved.", error);
        }
    }),
    getNgoByCity: ({ type, city }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let ngo = yield NGO_1.NGO.find({ type, city });
            return ngo;
        }
        catch (error) {
            console.error(error);
            throw (0, common_1.ApiError)("Internal Error", "NGO could not be found.", error);
        }
    }),
    getNgoByType: ({ type }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let ngo = yield NGO_1.NGO.find({ type });
            return ngo;
        }
        catch (error) {
            console.error(error);
            throw (0, common_1.ApiError)("Internal Error", "NGO could not be found.", error);
        }
    })
};
exports.default = NgoRepository;
