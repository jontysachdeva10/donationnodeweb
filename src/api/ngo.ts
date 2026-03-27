import express from "express";
const router = express.Router();
import { body, validationResult } from "express-validator";
import NgoService from "../service/ngo";

router.post(
  "/add",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "City is required").notEmpty(),
    body("type", "Type is required").notEmpty(),
    body("email", "Email is required").isEmail(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
  ],
  async (req: any, res: any) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    try {
      const { data } = await NgoService.addNgo(req.body);
      return res.json(data);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

router.get("/:type", async (req: any, res: any) => {
  try {
    const { data } = await NgoService.getNgo(req);
    return res.json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

export default router;
