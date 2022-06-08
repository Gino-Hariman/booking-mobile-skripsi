import { createStackNavigator } from "@react-navigation/stack";
import MainHeader from "components/navigation/headers/MainHeader";
import { useAuth } from "context/AuthContext";
import Login from "screens/Authentication/Login";
import StudentData from "screens/Authentication/StudentData";
import VerifyAccount from "screens/Authentication/VerifyAccount";
import Profile from "screens/Profile";
import StateScreen from "screens/StateScreen";
import { ProfileParamList } from "types/ProfileParamList";

const Stack = createStackNavigator<ProfileParamList>();

const ProfileStack = (): JSX.Element => {
  const { isLoginned } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => null,
        headerTitle: "",
        headerLeft: () => <MainHeader />,
      }}
    >
      {isLoginned ? (
        <>
          <Stack.Screen name="ProfileScreen" component={Profile} />
          <Stack.Screen name="StudentDataScreen" component={StudentData} />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="VerifyAccScreen" component={VerifyAccount} />
        </>
      )}
      <Stack.Screen name="StateScreen" component={StateScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
