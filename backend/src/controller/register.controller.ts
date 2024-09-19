import { Request, Response } from "express";
import { CreateRegisterInputBody } from "../schema/user.schema";

const register = (req: Request<unknown, unknown, CreateRegisterInputBody, unknown>, res: Response) => {
  const { edad, nombre, email, password } = req.body
  res.json({ msg: 'all ok', edad, nombre, email, password })
}

export { register }