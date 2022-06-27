import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SeatFill from "@Icons/Fill/Seat.svg";
import SeatOutlined from "@Icons/Outline/Seat.svg";
import HistoryFill from "@Icons/Fill/History.svg";
import HistoryOutlined from "@Icons/Outline/History.svg";
import AHistoryOutlined from "@Icons/Outline/AHistory.svg";
import ProfileFill from "@Icons/Fill/Profile.svg";
import ProfileOutlined from "@Icons/Outline/Profile.svg";
import AProfileOutlined from "@Icons/Outline/AProfile.svg";
import HomeFill from "@Icons/Fill/Home.svg";
import HomeOutlined from "@Icons/Outline/Home.svg";
import AHomeOutlined from "@Icons/Outline/AHome.svg";
import HomeStack from "routes/stack/HomeStack";
import SeatStack from "routes/stack/SeatStack";
import ProfileStack from "routes/stack/ProfileStack";
import HistoryStack from "routes/stack/HistoryStack";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const BottomTabs = (): JSX.Element => {
  const isIos = Platform.OS === "ios";

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        keyboardHandlingEnabled: false,
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "My Home")
            return focused ? (
              <HomeFill width={size} height={size} />
            ) : isIos ? (
              <HomeOutlined width={size} height={size} />
            ) : (
              <AHomeOutlined width={size} height={size} />
            );

          if (route.name === "My Seat")
            return focused ? (
              <SeatFill width={size} height={size} />
            ) : (
              <SeatOutlined width={size} height={size} />
            );
          if (route.name === "My History")
            return focused ? (
              <HistoryFill width={size} height={size} />
            ) : isIos ? (
              <HistoryOutlined width={size} height={size} />
            ) : (
              <AHistoryOutlined width={size} height={size} />
            );
          if (route.name === "Profile")
            return focused ? (
              <ProfileFill width={size} height={size} />
            ) : isIos ? (
              <ProfileOutlined width={size} height={size} />
            ) : (
              <AProfileOutlined width={size} height={size} />
            );
          return <></>;
        },
      })}
    >
      <Tabs.Screen name="My Home" component={HomeStack} />
      <Tabs.Screen name="My Seat" component={SeatStack} />
      <Tabs.Screen name="My History" component={HistoryStack} />
      <Tabs.Screen name="Profile" component={ProfileStack} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
