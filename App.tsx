import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";

import { Box, INativebaseConfig, NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

import Routes from "routes";
import styles from "styles";
import "react-native-gesture-handler";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const config: INativebaseConfig = {
    // rest of the config keys like dependencies can go here
    strictMode: "warn",
  };

  return (
    <NativeBaseProvider theme={styles} config={config}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          {loaded ? (
            <>
              <Routes />
              <Toast />
            </>
          ) : (
            <ScreenSpinner />
          )}
        </SafeAreaProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
