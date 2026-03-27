"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/config/db");
const app = (0, express_1.default)();
const user_1 = __importDefault(require("./api/user"));
const ngo_1 = __importDefault(require("./api/ngo"));
const activity_1 = __importDefault(require("./api/activity"));
// Init Middleware
app.use(express_1.default.json());
// Routes Middleware
app.use("/user", user_1.default);
app.use("/ngo", ngo_1.default);
app.use("/", activity_1.default);
// connect DB
(0, db_1.connectDB)();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
