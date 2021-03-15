import AsyncStorage from '@react-native-async-storage/async-storage';

const configInit = {
  token: null,
};

export async function getConfigApp() {
  try {
    const value = await AsyncStorage.getItem('@config');
    if (value !== null) {
      return JSON.parse(value);
    }
    return {};
  } catch (error) {
    console.log('Error', error);
  }
}

export async function getData(attribute:string) {
  try {
    const value = await AsyncStorage.getItem('@config');
    if (value !== null) {
      let data = JSON.parse(value);
      return data[attribute] || null;
    }
    return null;
  } catch (error) {
    console.log('Error', error);
  }
}

export async function storeData (value:string, attribute:string) {
  try {
    const storage = await AsyncStorage.getItem('@config');
    let data = storage ? JSON.parse(storage) : configInit;
    data[attribute] = value;
    await AsyncStorage.setItem('@config', JSON.stringify(data));
  } catch (error) {
    console.log('Error', error);
  }
}

