import { TypeOf, number, object, string } from 'zod'

export const createLoginSchema = object({
  body: object({
    password: string({
      required_error: 'Password is requiere'
    }).min(6, "Password too short - should be 6 charts minimun"),
    email: string({
      required_error: "Email is required"
    }).email("Not a valid email")
  })
})

export const createRegisterSchema = object({
  body: object({
    nombre: string({
      required_error: "Nombre es requerido"
    }).min(4, "Minimo 6 caracteres para el nombre"),
    edad: number({
      required_error: "La edad es requerida"
    })
      .gte(14, 'Minimo mayor a 14')
      .positive('Tiene que ser positivo'),
    email: string({
      required_error: "Correo es requierido"
    }).email('No tiene forma de email'),
    password: string({
      required_error: "Contraseña requerida"
    }).min(6, 'La contraseña como minimo debe tener 6')
  }),
})

export type CreateLoginInputBody = TypeOf<typeof createLoginSchema>["body"]
export type CreateRegisterInputBody = TypeOf<typeof createRegisterSchema>['body']