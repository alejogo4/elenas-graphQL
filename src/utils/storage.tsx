import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const value = await AsyncStorage.getItem(attribute);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (error) {
    console.log('Error', error);
  }
}

export async function storeData (value:string, attribute:string) {
  try {
    await AsyncStorage.setItem(attribute, value);
  } catch (error) {
    console.log('Error', error);
  }
}

