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
const Donate_1 = require("../models/Donate");
const Pickup_1 = require("../models/Pickup");
const ActivityRepository = {
    pickup: function ({ name, address, city, state, item, quantity, phone, email, }) {
        return __awaiter(this, void 0, void 0, function* () {
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
                return yield pickup.save();
            }
            catch (error) {
                console.error(error);
                throw (0, common_1.ApiError)("Internal Error", "Pickup could not be registered.", error);
            }
        });
    },
    donate: function ({ name, address, city, state, amount, phone, email, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let donation = new Donate_1.Donate({
                    name,
                    address,
                    city,
                    state,
                    amount,
                    phone,
                    email,
                });
                return yield donation.save();
            }
            catch (error) {
                console.error(error);
                throw (0, common_1.ApiError)("Internal Error", "Donation could not be made.", error);
            }
        });
    },
};
exports.default = ActivityRepository;
