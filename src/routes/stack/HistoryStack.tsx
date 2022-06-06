import MainHeader from "components/navigation/headers/MainHeader";
import MyHistory from "screens/MyHistory";
import { HistoryParamList } from "types/HistoryParamList";
import { createStackNavigator } from "@react-navigation/stack";
import StateScreen from "screens/StateScreen";

const Stack = createStackNavigator<HistoryParamList>();

const HistoryStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => null,
        headerTitle: "",
        headerLeft: () => <MainHeader />,
      }}
    >
      <Stack.Screen name="HistoryScreen" component={MyHistory} />
      <Stack.Screen name="StateScreen" component={StateScreen} />
    </Stack.Navigator>
  );
};

export default HistoryStack;
