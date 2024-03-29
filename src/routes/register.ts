import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { registerUser } from "../controller/register/register";

/**
 * @description ADD USER
 */
router.post(
  "/users",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "Please enter your City").notEmpty(),
    body("state", "Please enter your State").notEmpty(),
    body("email", "Please enter your valid Email").isEmail(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
  ],
  registerUser
);

export default router;