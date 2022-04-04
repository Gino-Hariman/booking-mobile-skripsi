import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = React.createContext();

const authTokenName = 'auth-tkn';

const AuthProvider = ({ children }) => {
  const navigation = useNavigation();

  const [authToken, setAuthToken] = useState<string | null>(null);

  const saveAuthToken = useCallback(async (token) => {
    await SecureStore.setItemAsync(authTokenName, token);
    setAuthToken(token);
  }, []);

  const clearAuthToken = useCallback(async () => {
    await SecureStore.deleteItemAsync(authTokenName);
    setAuthToken(null);
  }, []);

  const logout = useCallback(async () => {
    await clearAuthToken();
    return navigation.reset({
      index: 0,
      routes: [{ name: 'My Home/HomeScreen' }],
      actions: [navigation.navigate('My Home')],
    });
  }, [clearAuthToken, navigation]);

  useEffect(() => {
    const loadAuthToken = async () => {
      const token = await SecureStore.getItemAsync(authTokenName);
      setAuthToken(token);
    };

    loadAuthToken();
  }, []);

  const value = useMemo(
    () => ({
      authToken,
      saveAuthToken,
      clearAuthToken,
      logout,
      // isLoginned: Boolean(authToken),
    }),
    [authToken, saveAuthToken, clearAuthToken, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
