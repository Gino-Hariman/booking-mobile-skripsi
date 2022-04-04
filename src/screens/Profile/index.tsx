import { CommonActions, useNavigation } from '@react-navigation/native';
import ProfileDetail from 'components/detail-form/ProfileDetail';
import { useAuth } from 'context/AuthContext';
import { Text } from 'native-base';
import { useEffect } from 'react';
import Login from 'screens/Authentication/Login';

const Profile = () => {
  const { isLoginned, logout } = useAuth();
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

  return <ProfileDetail handleLogout={logout} />;
};

export default Profile;
