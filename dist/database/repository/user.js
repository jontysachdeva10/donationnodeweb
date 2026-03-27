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
const User_1 = require("../models/User");
const UserRepository = {
    findUser: function ({ phone }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield User_1.User.findOne({ phone });
                return user;
            }
            catch (error) {
                console.error(error);
                throw (0, common_1.ApiError)("Internal Error", "User could not be found.", error);
            }
        });
    },
    findAllUsers: function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield User_1.User.find({});
                return users;
            }
            catch (error) {
                console.error(error);
                throw (0, common_1.ApiError)("Internal Error", "User could not be found.", error);
            }
        });
    },
    addUser: function ({ name, address, city, state, email, phone }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = new User_1.User({
                    name,
                    address,
                    city,
                    state,
                    email,
                    phone,
                });
                return yield user.save();
            }
            catch (error) {
                console.error(error);
                throw (0, common_1.ApiError)("Internal Error", "User could not be saved.", error);
            }
        });
    },
};
exports.default = UserRepository;
