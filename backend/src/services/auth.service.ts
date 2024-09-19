import { loginModel, registerModel } from "../models/user.model"

const loginUser = async ({ email, password }: { email: string, password: string }) => {
  try {
    const user = await loginModel.create({ email, password })
    return user;
  } catch (error) {
    throw new Error('Error on loginUser.service')
  }
}

const registerUser = async ({ nombre, edad, email, password }: { nombre: string, edad: number, email: string, password: string }) => {
  try {
    const user = await registerModel.create({ nombre, edad, email, password });
    return user;
  } catch (error) {
    throw new Error('Error on registerUser.service')
  }
}

export { loginUser ,registerUser}