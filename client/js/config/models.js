import AsyncStorage from "@react-native-community/async-storage";
export const authenticateUser = async (userId, userToken) => {
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
    return await AsyncStorage.getItem("UserToken");
  } catch (e) {
    return e;
  }
};
