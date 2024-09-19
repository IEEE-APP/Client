import { Request, Response } from "express";
import { CreateLoginInputBody } from "../schema/user.schema";
import { loginUser } from "../services/auth.service";

const login = async (req: Request<unknown, unknown, CreateLoginInputBody, unknown>, res: Response) => {
  const { email, password } = req.body
  try {
    const user = await loginUser({ email, password })
    res.json({ msg: 'ok', user })
  } catch (error) {
    res.json({ msg: "somethint wronr" })
  }
}

export { login }