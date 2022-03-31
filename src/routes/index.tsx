import React from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHeader from 'components/navigation/headers/MainHeader';

const Root = createNativeStackNavigator();

const renderMainHeader = (): JSX.Element => <MainHeader />;

const Routes = (): JSX.Element => {
  const isLogin = true;

  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLogin ? (
          <Root.Screen name="BottomTabs" component={BottomTabs} />
        ) : (
          <Root.Screen name="BottomTabs" component={BottomTabs} />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
