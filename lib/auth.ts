import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// TODO: implement with the jwt of the db
const storeData = async (value: any) => {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    // saving error
  }
};

// TODO: use inside the context to redirect the home page
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (value !== null) {
      // value previously stored
    }

    return value;
  } catch (e) {
    // error reading value
  }
};

// TODO: call it when we sign-out
const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('my-key')
  } catch (error) {
    console.error('Error clearing token', error);
  }
}

const getCurrentUser = async () => { }

const login = async (email: string, password: string) => {
  try {
    const data = await axios.post('https://smart-learn-backend.vercel.app/api/login', {
      email: email,
      user_password: password
    })
    return { status: true, info: data.data.user }
  } catch (error: any) {
    return { status: false, info:error.response.data.message }
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

export { getCurrentUser, clearToken, getData, storeData, login, requestCodeNumber }