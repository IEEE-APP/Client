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
    const sendBackend = await axios.post('http://192.168.10.3:4000/api/auth/login', {
      email,
      password
    })
    return sendBackend.data.msg
  } catch (error: any) {
    return error.response.data
  }
}

const requestCodeNumber = async (email: string) => {
  try {
    const data = await axios.get('https://smart-learn-backend.vercel.app/api/generateCode')
    console.log(data)
  } catch (error:any) {
    console.log(error.response.data.message)
  }
}

export { getCurrentUser, clearToken, getData, storeData, login, requestCodeNumber }