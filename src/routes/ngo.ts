import express from "express";
const router = express.Router();
import { body } from "express-validator";

/**
 * @description ADD NGO
 */
import { addNgo, getNgo } from "../controller/ngo/ngo";
router.post(
  "/",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "City is required").notEmpty(),
    body("type", "Type is required").notEmpty(),
    body("email", "Email is required").isEmail(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
  ],
  addNgo
);

/**
 * @description GET NGO
 */
router.get("/:type", getNgo);

/**
 * @description PICKUP REGISTER
 */
import { pickupRegister } from "../controller/ngo/pickup";
router.post(
  "/pickup",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "Please enter your City").notEmpty(),
    body("state", "Please enter your State").notEmpty(),
    body("email", "Please enter your valid Email").isEmail(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
  ],
  pickupRegister
);

/**
 * @description DONATE MONEY
 */
import { donateMoney } from "../controller/ngo/donate";
router.post("/donate", [], donateMoney);

export default router;
