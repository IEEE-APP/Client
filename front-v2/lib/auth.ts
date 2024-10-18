import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: implement with the jwt of the db
const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('userToken', token)
  } catch (error) {
    console.error('Error saving token', error);
  }
}

// TODO: use inside the context to redirect the home page
const getToken = async () => {
  try {
    return await AsyncStorage.getItem('userToken')
  } catch (error) {
    console.error('Error retrieving token', error);
  }
}

// TODO: call it when we sign-out
const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken')
  } catch (error) {
    console.error('Error clearing token', error);
  }
}

const getCurrentUser = async () => { }

export { getCurrentUser, clearToken, getToken, storeToken }