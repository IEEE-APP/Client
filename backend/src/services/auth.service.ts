import { loginModel, registerModel } from "../models/user.model"

const loginUser = async ({ email, password }: { email: string, password: string }) => {
  try {
    const user = await loginModel.create({ email, password })
    return user;
  } catch (error) {
    console.log(error)
    throw new Error('Error on loginUser')
  }
}

export {loginUser}