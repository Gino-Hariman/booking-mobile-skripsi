import React from 'react';
import MyHome from 'screens/MyHome';
import { HomeParamList } from 'types/HomeParamList';
import Header from 'components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHeader from 'components/navigation/headers/MainHeader';
import LocationDetail from 'screens/LocationDetail';

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => null,
        headerTitle: '',
        headerLeft: () => <MainHeader />,
      }}>
      <Stack.Screen name="HomeScreen" component={MyHome} />
      <Stack.Screen name="LocationDetailScreen" component={LocationDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
