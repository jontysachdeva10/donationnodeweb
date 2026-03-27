import express from "express";
const router = express.Router();
import { body, validationResult } from "express-validator";
import UserService from "../service/user";

/**
 * @description ADD USER
 */
router.post(
  "/register",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "Please enter your City").notEmpty(),
    body("state", "Please enter your State").notEmpty(),
    body("email", "Please enter your valid Email").isEmail(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
  ],
  async (req: any, res: any) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    try {
      // const { name, address, city, state, email, phone } = req.body;
      const { data } = await UserService.registerUser(req.body);
      return res.json(data);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

router.get("/", [], async (req: any, res: any) => {
  try {
    const { data } = await UserService.getAllUsers();
    return res.json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

export default router;
