import axios from 'axios';


const IP="192.168.1.4"; //ip del pc(cambiar por su ip)
const PORT=4000; // puerto backend
const API_URL = `http://${IP}:${PORT}`; // puerto

// Función para registrar un nuevo usuario
export const registerUser = async (userData: {
  nombre: string;
  edad: number;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during user registration', error);
    throw error;
  }
};

export const loginUser = async (userData: {
   email: string;
   password: string;
 }) => {
   try {
     const response = await axios.post(`${API_URL}/auth/login`, userData);
     return response.data;
   } catch (error) {
     console.error('Error during user login', error);
     throw error;
   }
 };
 