import { loginModel, registerModel } from "../models/user.model"

const loginUser = async ({ email, password }: { email: string, password: string }) => {
  try {
    const user = await registerModel.findOne({ email })
    if (user) {
      const result = await user.comparePassword(password)
      if (result) {
        const userSession = await loginModel.create({ email, password })
        return { userSession, msg: 'user existe' };
      } else {
        return { userSesstion: undefined, msg: "password not the same" }
      }
    }
    return { user: undefined, msg: 'user not finded' }
  } catch (error) {
    throw new Error('Error on loginUser.service')
  }
}

const registerUser = async ({ nombre, edad, email, password }: { nombre: string, edad: number, email: string, password: string }) => {
  try {
    const user = await registerModel.create({ email, edad, nombre, password });
    return user;
  } catch (error) {
    throw new Error('Error on registerUser.service')
  }
}

export { loginUser, registerUser }