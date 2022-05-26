import MainHeader from "components/navigation/headers/MainHeader";
import MyHistory from "screens/MyHistory";
import { HistoryParamList } from "types/HistoryParamList";
import { createStackNavigator } from "@react-navigation/stack";

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
    </Stack.Navigator>
  );
};

export default HistoryStack;
