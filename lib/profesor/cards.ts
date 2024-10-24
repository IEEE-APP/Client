const provideCards = () => {
  const cards = [
    { label: "Crear ejercicio", id: 1, img: require('../../assets/images/create.png'), redirect: 'create' },
    { label: "Materias", id: 2, img: require('../../assets/images/materias.png'), redirect: 'create' },
    { label: "Consultas", id: 3, img: require('../../assets/images/questions.png'), redirect: 'create' },
    { label: "Clasificacion", id: 4, img: require('../../assets/images/clasificacion.png'), redirect: 'create' },
    { label: "Ajustes", id: 5, img: require('../../assets/images/settins.png'), redirect: 'create' },
    { label: "Salir", id: 6, img: require('../../assets/images/salir.png'), redirect: 'create' }
  ]
  return cards;
}
export default provideCards