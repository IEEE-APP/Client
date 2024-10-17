import { object, string,number } from 'zod';

export const loginSchema = object({
  email: string().min(1, "El email es requerido").email("Email inválido"),
  password: string().min(1, "La contraseña es requerida").min(6, "La contraseña debe tener al menos 6 caracteres"),
});
export const registerSchema = object({
   name: string().min(1, "El nombre es requerido"),
   age: number().min(1, "La edad es requerida").gte(14, 'Minimo mayor a 14').max(120, "Edad inválida"),
   email: string().min(1, "El email es requerido").email("Email inválido"),
   password: string().min(6, "La contraseña debe tener al menos 6 caracteres"),
   confirmPassword: string().min(6, "La confirmación de la contraseña es requerida")
 }).refine((data) => data.password === data.confirmPassword, {
   path: ['confirmPassword'],
   message: 'Las contraseñas no coinciden',
 });