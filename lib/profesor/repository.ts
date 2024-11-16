import { FormUI } from "@/app/(tabs)/(profesor)/create"
import axios from "axios"

export const createMateria = async (professor_id: number, class_name: string) => {
  try {
    const data = await axios.post("https://smart-learn-backend.vercel.app/api/create/Classroom", {
      professor_id,
      class_name
    })
    console.log(data.data)
    return { status: true, data: data.data }
  } catch (error: any) {
    return { status: false, data: error.response.data.message }
  }
}

export const createExercice = async (form: FormUI) => {
  try {
    const data = await axios.post('http://192.168.10.3:4000/api/profesor/ejercicios', {
      materia: form.materia,
      description: form.tema,
      preguntas: form.preguntas
    })
    return data.data
  } catch (error: any) {
    console.log("something wrong here: " + error.response.data)
  }
}