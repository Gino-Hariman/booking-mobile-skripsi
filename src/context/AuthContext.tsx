import { useNavigation } from "@react-navigation/native";

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";
import { ProfileNavigationProps } from "types/NavigationProps";
import instance from "api/instance";

interface AuthContextInterface {
  login: (token: string) => void;
  authToken: string | null;
  saveAuthToken: (token: string) => Promise<void>;
  clearAuthToken: () => Promise<void>;
  logout: () => Promise<void>;
  isLoginned: boolean;
}

export const AuthContext = React.createContext<AuthContextInterface | null>(
  null
);

const authTokenName = "auth-tkn";

interface Props {
  children: JSX.Element;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const navigation = useNavigation<ProfileNavigationProps>();

  const [authToken, setAuthToken] = useState<string | null>(null);

  const login = (token: string, email: string) => {
    navigation.navigate("VerifyAccScreen", {
      loginToken: token,
      email,
    });
  };

  const saveAuthToken = useCallback(async (data) => {
    await SecureStore.setItemAsync(authTokenName, data.loginToken);
    await SecureStore.setItemAsync("email", data.email);
    setAuthToken(data.loginToken);
    instance.defaults.headers["Authorization"] = `Bearer ${data.loginToken}`;
    return navigation.reset({
      index: 0,
      routes: [{ name: "Profile" }],
      // actions: [navigation.navigate("ProfileScreen")],
    });
  }, []);

  const clearAuthToken = useCallback(async () => {
    await SecureStore.deleteItemAsync(authTokenName);
    instance.defaults.headers["Authorization"] = "";
    setAuthToken(null);
  }, []);

  const logout = useCallback(async () => {
    await clearAuthToken();
    return navigation.reset({
      index: 0,
      routes: [{ name: "My Home" }],
      // actions: [navigation.navigate("My Home")],
    });
  }, [clearAuthToken, navigation]);

  useEffect(() => {
    const loadAuthToken = async () => {
      const token = await SecureStore.getItemAsync(authTokenName);

      if (token) {
        instance.defaults.headers["Authorization"] = `Bearer ${token}`;
        setAuthToken(token);
      }
    };

    loadAuthToken();
  }, []);

  const value: AuthContextInterface = useMemo(
    () => ({
      login,
      authToken,
      saveAuthToken,
      clearAuthToken,
      logout,
      isLoginned: Boolean(authToken),
    }),
    [login, authToken, saveAuthToken, clearAuthToken, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
