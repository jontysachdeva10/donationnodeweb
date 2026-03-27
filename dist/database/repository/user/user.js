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
const User_1 = require("../../models/User");
const UserRepository = {
    findUser: function ({ phone }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield User_1.User.findOne({ phone });
                return user;
            }
            catch (error) {
                console.error(error);
                throw new Error(error.message);
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
                throw new Error(error.message);
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
                throw new Error(error.message);
            }
        });
    },
};
exports.default = UserRepository;
