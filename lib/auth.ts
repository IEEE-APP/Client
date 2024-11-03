import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: implement with the jwt of the db
const storeData = async (value:any) => {
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
    console.log(value)
    return value;
  } catch (e) {
    // error reading value
  }
};

// TODO: call it when we sign-out
const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken')
  } catch (error) {
    console.error('Error clearing token', error);
  }
}

const getCurrentUser = async () => { }

export { getCurrentUser, clearToken, getData, storeData }