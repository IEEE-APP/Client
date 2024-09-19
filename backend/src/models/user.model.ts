import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcrypt'
import config from "config"
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

loginSchema.pre('save', async function (next) {
  let user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))
  const hash = bcrypt.hashSync(user.password as string, salt)
  user.password = hash;
  return next();
})
const registerSchema = new mongoose.Schema<RegisterDocument>({
  nombre: { type: String, require: true },
  edad: { type: Number, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true }
})

registerSchema.pre('save', async function (next) {
  let user = this;
  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))
  const hash = bcrypt.hashSync(user.password as string, salt)
  user.password = hash;
  return next();
})

const loginModel = mongoose.model<LoginDocument>("Login", loginSchema)
const registerModel = mongoose.model<RegisterDocument>('Create', registerSchema)

export { loginModel, registerModel }