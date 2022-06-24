import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainHeader from "components/navigation/headers/MainHeader";
import { useAuth } from "context/AuthContext";
import MySeat from "screens/MySeat";
import StateScreen from "screens/StateScreen";
import { SeatParamList } from "types/SeatParamList";
import Illus from "@Illus/mySeat.svg";
import Login from "screens/Authentication/Login";

const Stack = createStackNavigator<SeatParamList>();

const SeatStack = (): JSX.Element => {
  const navigation = useNavigation();
  const { isLoginned } = useAuth();

  const StateComp = () => (
    <StateScreen
      title="Seat is still empty"
      subTitle="Let's start by Loggin in first"
      btnText="Login"
      Illus={Illus}
      handlePress={() => navigation.navigate("LoginScreen")}
    />
  );
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => null,
        headerTitle: "",
        headerLeft: () => <MainHeader />,
      }}
    >
      {isLoginned ? (
        <>
          <Stack.Screen name="MySeatScreen" component={MySeat} />
          <Stack.Screen name="StateScreen" component={StateScreen} />
        </>
      ) : (
        <Stack.Screen name="processing" component={StateComp} />
      )}

      <Stack.Screen name="LoginScreen" component={Login} />
    </Stack.Navigator>
  );
};

export default SeatStack;
