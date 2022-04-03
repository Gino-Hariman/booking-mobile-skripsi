import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHeader from 'components/navigation/headers/MainHeader';
import Profile from 'screens/Profile';
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
    </Stack.Navigator>
  );
};

export default ProfileStack;
