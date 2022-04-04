import React from 'react-native/Libraries/NewAppScreen';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHeader from 'components/navigation/headers/MainHeader';
import AuthProvider from 'context/AuthContext';

const Root = createNativeStackNavigator();

const renderMainHeader = (): JSX.Element => <MainHeader />;

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F9F9F9',
  },
};

const Routes = (): JSX.Element => {
  const isLogin = true;

  return (
    <NavigationContainer theme={MyTheme}>
      <AuthProvider>
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
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Routes;
