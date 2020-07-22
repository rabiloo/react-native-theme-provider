import AsyncStorage from '@react-native-community/async-storage';

const AsyncStoreKey = {mode: 'mode'};

const ThemeLocal = {
  save: async (mode) => {
    try {
      await AsyncStorage.setItem(AsyncStoreKey.mode, mode);
    } catch (error) {
      // FirebaseInstant.crash.recordError(error);
    }
  },
  remove: () => {
    AsyncStorage.removeItem(AsyncStoreKey.mode);
  },
  get: async () => {
    try {
      const result = await AsyncStorage.getItem(AsyncStoreKey.mode);
      return result;
    } catch (error) {
      // FirebaseInstant.crash.recordError(error);
      return null;
    }
  },
};
export {ThemeLocal};
