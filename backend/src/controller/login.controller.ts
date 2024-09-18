import { Request, Response } from "express";
import { CreateLoginInputBody } from "../schema/user.schema";

const login = (req: Request<unknown, unknown, CreateLoginInputBody, unknown>, res: Response) => {
  const { email, password } = req.body
  res.json({ msg: "ok", email, password })
}

export { login }