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
const activity_1 = __importDefault(require("../database/repository/activity"));
const common_1 = require("../utils/common");
const ActivityService = {
    requestPickup: (props) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, address, city, state, item, quantity, phone, email } = props;
        try {
            let pickup = activity_1.default.pickup({
                name,
                address,
                city,
                state,
                item,
                quantity,
                phone,
                email,
            });
            return (0, common_1.formatData)({
                pickup,
                message: "Your pickup has been registered with us.",
            });
        }
        catch (error) {
            console.error(error);
            throw (0, common_1.ApiError)("Not Found", "Error in submitting request.", error);
        }
    }),
    donateMoney: (props) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, address, city, state, amount, phone, email } = props;
        try {
            let donation = activity_1.default.donate({
                name,
                address,
                city,
                state,
                amount,
                phone,
                email,
            });
            return (0, common_1.formatData)({ donation, message: "Thank You! for your donation" });
        }
        catch (error) {
            console.error(error);
            throw (0, common_1.ApiError)("Not Found", "Error in submitting request.", error);
        }
    }),
};
exports.default = ActivityService;
