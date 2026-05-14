import { Router } from "express";
import { validate } from "../middlewares/validation";
import { schema } from "../schema/requestSchema";
import {
  LoginController,
  RegisterController,
} from "../controllers/auth.controller";

const router: Router = Router();
router.post("/register", validate(schema), RegisterController);
router.post("/login", validate(schema), LoginController);

export default router;
