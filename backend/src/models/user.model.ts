import mongoose, { mongo } from "mongoose";

export interface LoginDocument extends mongoose.Document {
  email: string;
  password: string;
}

export interface RegisterDocument extends mongoose.Document {
  nombre: string
  edad: number
  email: string
  password: string
}

const loginSchema = new mongoose.Schema<LoginDocument>({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true }
})

const registerSchema = new mongoose.Schema<RegisterDocument>({
  nombre: { type: String, require: true },
  edad: { type: Number, require: true },
  email: { type: String, require: true, unique: true }
})

const loginModel = mongoose.model<LoginDocument>("Login", loginSchema)
const registerModel = mongoose.model<RegisterDocument>('Create', registerSchema)

export { loginModel, registerModel }