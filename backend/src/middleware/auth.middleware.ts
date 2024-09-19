import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const valiteResources = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    })
    next()
  } catch (e: any) {
    return res.status(404).json({ from: "Error from validateResources.ts", error: e.issues})
  }
}

export default valiteResources