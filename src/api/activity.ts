import express from "express";
const router = express.Router();
import { body, validationResult } from "express-validator";
import ActivityService from "../service/activity";

router.post(
  "/pickup",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "Please enter your City").notEmpty(),
    body("state", "Please enter your State").notEmpty(),
    body("item", "Enter the item").notEmpty(),
    body("quantity", "Please define the number of items").notEmpty(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
    body("email", "Please enter your valid Email").isEmail(),
  ],
  async (req: any, res: any) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    try {
      const { data } = await ActivityService.requestPickup(req.body);
      return res.json(data);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

router.post(
  "/donate",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "Please enter your City").notEmpty(),
    body("state", "Please enter your State").notEmpty(),
    body("amount", "Please enter Amount").notEmpty(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
    body("email", "Please enter your valid Email").isEmail(),
  ],
  async (req: any, res: any) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    try {
      const { data } = await ActivityService.donateMoney(req.body);
      return res.json(data);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

export default router;
