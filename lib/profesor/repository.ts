import axios from "axios"

export const createMateria = async (professor_id: number, class_name: string) => {
  try {
    const data = await axios.post("https://smart-learn-backend.vercel.app/api/create/Classroom", {
      professor_id,
      class_name
    })

    return { status: true, data: data.data }
  } catch (error: any) {
    return { status: false, data: error.response.data.message }
  }
}