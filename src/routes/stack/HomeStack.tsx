import React from "react";
import MyHome from "screens/MyHome";
import { HomeParamList } from "types/HomeParamList";
import { createStackNavigator } from "@react-navigation/stack";
import MainHeader from "components/navigation/headers/MainHeader";
import LocationDetail from "screens/LocationDetail";
import StateScreen from "screens/StateScreen";
import Illus from "@Illus/processing.svg";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator<HomeParamList>();

const HomeStack = (): JSX.Element => {
  const navigation = useNavigation();
  const StateComp = () => (
    <StateScreen
      title="Your Booking is on Processing"
      subTitle="Please kindly wait, we will notify you as soon as possible"
      btnText="Continue"
      Illus={Illus}
      // handlePress={() => navigation.navigate("My Seat")}
      handlePress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "My Seat" }],
          // actions: [navigation.navigate("My Home")],
        })
      }
    />
  );
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerLeft: () => <MainHeader />,
      }}
    >
      <Stack.Screen name="HomeScreen" component={MyHome} />
      <Stack.Screen name="LocationDetailScreen" component={LocationDetail} />
      <Stack.Screen name="processing" component={StateComp} />
    </Stack.Navigator>
  );
};

export default HomeStack;
