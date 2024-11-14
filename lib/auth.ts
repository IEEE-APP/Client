import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveSessionData = async (sessionData: any) => {
  try {
    const jsonData = JSON.stringify(sessionData);
    await AsyncStorage.setItem('@session_data', jsonData);
    return;
    console.log('Datos de sesión guardados');
  } catch (error) {
    console.error('Error al guardar los datos de sesión', error);
  }
};

const getSessionData = async () => {
  try {
    const jsonData = await AsyncStorage.getItem('@session_data');
    return jsonData != null ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error('Error al obtener los datos de sesión', error);
    return null;
  }
};

const clearSessionData = async () => {
  try {
    await AsyncStorage.removeItem('@session_data');
    console.log('Sesión cerrada');
  } catch (error) {
    console.error('Error al cerrar sesión', error);
  }
};


const login = async (email: string, password: string) => {
  try {
    const data = await axios.post('https://smart-learn-backend.vercel.app/api/login', {
      email: email,
      user_password: password
    })
    await saveSessionData(data.data.user)
    return { status: true, info: data.data.user }
  } catch (error: any) {
    console.log("erorr on catc:: " + error)
    return { status: false, info: error.response.data.message }
  }
}

const requestCodeNumber = async (email: string) => {
  try {
    const data = await axios.post('https://smart-learn-backend.vercel.app/api/generateCode', {
      email
    })
    return { status: true, code: data.data.code, mensage: data.data.mensage }
    console.log(data.data)
  } catch (error: any) {
    return { status: false, mensage: error.response.data.message, code: null }
  }
}

export { login, requestCodeNumber, getSessionData, saveSessionData, clearSessionData }