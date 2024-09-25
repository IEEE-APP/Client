import { Request, Response } from "express";
import { CreateRegisterInputBody } from "../schema/user.schema";
import { registerUser } from "../services/auth.service";

const register = async (req: Request<unknown, unknown, CreateRegisterInputBody, unknown>, res: Response) => {
  const { edad, nombre, email, password } = req.body
  try {
    const {user, msg} = await registerUser({ edad, nombre, email, password });
    res.json({ msg, user })
  } catch (error) {
    throw new Error('Error on register.controller')

  }
}

export { register }