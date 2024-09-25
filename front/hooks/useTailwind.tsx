import { create } from 'twrnc';

// Aquí defines la configuración personalizada directamente en el archivo, si lo necesitas.
const tailwind = create({
  theme: {
    extend: {
      colors: {
        'blue-500': '#1A5EFF',
        'blue-700': '#1E90FF',
        'blue-300': '#87CEEB',
      },
    },
  },
});

export default tailwind;
