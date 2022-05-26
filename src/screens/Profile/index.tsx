import { CommonActions, useNavigation } from "@react-navigation/native";
import ProfileDetail from "components/detail-form/ProfileDetail";
import RegisterProfile from "components/detail-form/RegisterProfile";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
import ScrollPage from "components/ScrollPage";
import { useAuth } from "context/AuthContext";
import useGetQuery from "hooks/useGetQuery";
import { Text } from "native-base";
import { useEffect } from "react";
import Login from "screens/Authentication/Login";

const Profile = () => {
  const { isLoginned, logout } = useAuth();
  const navigation = useNavigation();
  const { data, isFetching } = useGetQuery(
    ["profile", "detail"],
    "/students/byEmail?email=gh80011@student.uph.edu",
    { onError: (err) => console.log("er123", err) }
  );

  console.log("data", data);
  useEffect(() => {
    if (!isLoginned)
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        })
      );
  }, []);
  if (isFetching) return <ScreenSpinner />;

  return (
    <ScrollPage>
      {Boolean(data.length) ? (
        <ProfileDetail datas={data[0]} handleLogout={logout} />
      ) : (
        <RegisterProfile />
      )}
    </ScrollPage>
  );
};

export default Profile;
