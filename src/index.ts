import express from "express";
import { connectDB } from "./database/config/db";

const app = express();

import userRoutes from "./api/user";
import ngoRoutes from "./api/ngo";
import activityRoutes from "./api/activity";

// Init Middleware
app.use(express.json());

// Routes Middleware
app.use("/user", userRoutes);
app.use("/ngo", ngoRoutes);
app.use("/", activityRoutes);

// connect DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
