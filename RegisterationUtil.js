import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveRegistrationProgress = async (screenName, data) => {
  try {
    await AsyncStorage.setItem(
      `registrationProgress${screenName}`,
      JSON.stringify(data),
    );
    console.log('Saved registration progress for', screenName);
  } catch (e) {
    console.error(e);
  }
};

export const getRegistrationProgress = async screenName => {
  try {
    const value = await AsyncStorage.getItem(
      `registrationProgress${screenName}`,
    );
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    console.error(e);
  }
};

