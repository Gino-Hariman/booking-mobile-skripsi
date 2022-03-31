import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SeatFill from '@Icons/Fill/Seat.svg';
import SeatOutlined from '@Icons/Outline/Seat.svg';
import HistoryFill from '@Icons/Fill/History.svg';
import HistoryOutlined from '@Icons/Outline/History.svg';
import ProfileFill from '@Icons/Fill/Profile.svg';
import ProfileOutlined from '@Icons/Outline/Profile.svg';
import HomeFill from '@Icons/Fill/Home.svg';
import HomeOutlined from '@Icons/Outline/Home.svg';
import HomeStack from 'routes/stack/HomeStack';

const Tabs = createBottomTabNavigator();

const BottomTabs = (): JSX.Element => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        keyboardHandlingEnabled: false,
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'My Home')
            return focused ? (
              <HomeFill width={size} height={size} />
            ) : (
              <HomeOutlined width={size} height={size} />
            );
          if (route.name === 'My Seat')
            return focused ? (
              <SeatFill width={size} height={size} />
            ) : (
              <SeatOutlined width={size} height={size} />
            );
          if (route.name === 'My History')
            return focused ? (
              <HistoryFill width={size} height={size} />
            ) : (
              <HistoryOutlined width={size} height={size} />
            );
          if (route.name === 'Profile')
            return focused ? (
              <ProfileFill width={size} height={size} />
            ) : (
              <ProfileOutlined width={size} height={size} />
            );
          return <></>;
        },
      })}>
      <Tabs.Screen name="My Home" component={HomeStack} />
      <Tabs.Screen name="My Seat" component={HomeStack} />
      <Tabs.Screen name="My History" component={HomeStack} />
      <Tabs.Screen name="Profile" component={HomeStack} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
