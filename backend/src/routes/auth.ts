import { Router } from "express";
import { login } from "../controller/login.controller";
import { register } from "../controller/register.controller";
import valiteResources from "../middleware/auth.middleware";
import { createLoginSchema, createRegisterSchema } from "../schema/user.schema";

const authRouter = Router()


authRouter.post('/login', valiteResources(createLoginSchema), login)
authRouter.post('/register', valiteResources(createRegisterSchema), register)

export default authRouter