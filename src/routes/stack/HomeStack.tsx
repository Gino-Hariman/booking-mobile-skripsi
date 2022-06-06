import React from "react";
import MyHome from "screens/MyHome";
import { HomeParamList } from "types/HomeParamList";
import Header from "components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import MainHeader from "components/navigation/headers/MainHeader";
import LocationDetail from "screens/LocationDetail";
import StateScreen from "screens/StateScreen";
import Illus from "@Illus/processing.svg";

const Stack = createStackNavigator<HomeParamList>();

const HomeStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => null,
        headerTitle: "",
        headerLeft: () => <MainHeader />,
      }}
    >
      <Stack.Screen name="HomeScreen" component={MyHome} />
      <Stack.Screen name="LocationDetailScreen" component={LocationDetail} />
      <Stack.Screen
        name="StateScreen"
        component={() => (
          <StateScreen
            title="Your Booking is on Processing"
            subTitle="Please kindly wait, we will notify you as soon as possible"
            btnText="Continue"
            Illus={Illus}
          />
        )}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
