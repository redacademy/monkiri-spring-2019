import AsyncStorage from "@react-native-community/async-storage";
export const setUser = async (userId, userToken) => {
  try {
    await AsyncStorage.setItem("userToken", userToken);
    await AsyncStorage.setItem("userId", userId);
  } catch (e) {
    return e;
  }
};

export const getUserId = async () => {
  try {
    return await AsyncStorage.getItem("userId");
  } catch (e) {
    return e;
  }
};

export const getUserToken = async () => {
  try {
    return await AsyncStorage.getItem("userToken");
  } catch (e) {
    return e;
  }
};

export const logOut = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    return e;
  }
};
