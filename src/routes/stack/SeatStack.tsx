import { createStackNavigator } from "@react-navigation/stack";
import MainHeader from "components/navigation/headers/MainHeader";
import MySeat from "screens/MySeat";
import { SeatParamList } from "types/SeatParamList";

const Stack = createStackNavigator<SeatParamList>();

const SeatStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => null,
        headerTitle: "",
        headerLeft: () => <MainHeader />,
      }}
    >
      <Stack.Screen name="MySeatScreen" component={MySeat} />
    </Stack.Navigator>
  );
};

export default SeatStack;
