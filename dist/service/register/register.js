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
const common_1 = require("../../utils/common");
const user_1 = __importDefault(require("../../database/repository/user/user"));
const UserService = {
    registerUser: function (props) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, address, city, state, email, phone } = props;
            try {
                let existingVolunteer = yield user_1.default.findUser({ phone });
                if (existingVolunteer) {
                    return (0, common_1.formatData)("User already exists.");
                }
                existingVolunteer = user_1.default.addUser({
                    name,
                    address,
                    city,
                    state,
                    email,
                    phone,
                });
                return (0, common_1.formatData)(existingVolunteer);
            }
            catch (error) {
                console.error(error);
                throw new Error(error.message);
            }
        });
    },
    getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let allUsers = yield user_1.default.findAllUsers();
            return (0, common_1.formatData)(allUsers);
        }
        catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    })
};
exports.default = UserService;
