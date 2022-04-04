import { CommonActions, useNavigation } from '@react-navigation/native';
import { useAuth } from 'context/AuthContext';
import { Text } from 'native-base';
import { useEffect } from 'react';
import Login from 'screens/Authentication/Login';

const Profile = () => {
  const { isLoginned } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (!isLoginned)
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        }),
      );
  }, []);

  return <Text>Profile</Text>;
};

export default Profile;
