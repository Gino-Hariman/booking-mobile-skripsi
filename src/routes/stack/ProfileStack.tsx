import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHeader from 'components/navigation/headers/MainHeader';
import Login from 'screens/Authentication/Login';
import StudentData from 'screens/Authentication/StudentData';
import VerifyAccount from 'screens/Authentication/VerifyAccount';
import Profile from 'screens/Profile';
import ProfileDetail from 'screens/Profile/ProfileDetail';
import { ProfileParamList } from 'types/ProfileParamList';

const Stack = createNativeStackNavigator<ProfileParamList>();

const ProfileStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => null,
        headerTitle: '',
        headerLeft: () => <MainHeader />,
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="VerifyAccScreen" component={VerifyAccount} />
      <Stack.Screen name="StudentDataScreen" component={StudentData} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
