const provideCards = () => {
  const cards = [
    { label: "Crear ejercicio", id: 1, img: require('../../assets/images/create.png'), redirect: 'create' },
    { label: "Materias", id: 2, img: require('../../assets/images/materias.png'), redirect: 'bookmark' },
    { label: "Consultas", id: 3, img: require('../../assets/images/questions.png'), redirect: 'queries' },
    { label: "Calificacion", id: 4, img: require('../../assets/images/clasificacion.png'), redirect: 'qualifications' },
    { label: "Ajustes", id: 5, img: require('../../assets/images/settins.png'), redirect: 'setting' },
  ]
  return cards;
}
export default provideCards