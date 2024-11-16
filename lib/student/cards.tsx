import axios from "axios";

export const provideCards = () => {
  const cards = [
    { label: "Resolver Ejercicio", id: 1, img: require('../../assets/images/create.png'), redirect: 'resolver' },
    { label: "Materias", id: 2, img: require('../../assets/images/materias.png'), redirect: 'courses' },
    { label: "Consultas", id: 3, img: require('../../assets/images/questions.png'), redirect: 'resolver' },
    { label: "Clasificacion", id: 4, img: require('../../assets/images/clasificacion.png'), redirect: 'resolver' },
    { label: "Ajustes", id: 5, img: require('../../assets/images/settins.png'), redirect: 'resolver' },
    { label: "Logout", id: 6, img: require('../../assets/images/salir.png'), redirect: 'resolver' }
  ]
  return cards;
}

export const joinClassRoom = async (token: string, userId: number) => {
  try {
    const data = await axios.post('https://smart-learn-backend.vercel.app/api/joinClassroom', {
      token,
      student_id: userId
    })

    return { status: true, mensage: data.data.mensage, data: data.data.classroom }
  } catch (error: any) {
    return { status: false, mensage: error.response.data.message, data:null }
  }
}