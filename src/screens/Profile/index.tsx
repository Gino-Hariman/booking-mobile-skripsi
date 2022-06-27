import ProfileDetail from "components/detail-form/ProfileDetail";
import RegisterProfile from "components/detail-form/RegisterProfile";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
import ScrollPage from "components/ScrollPage";
import { useAuth } from "context/AuthContext";
import useGetQuery from "hooks/useGetQuery";
import { useEffect } from "react";

const Profile = () => {
  const { logout } = useAuth();
  const { data, isFetching, refetch } = useGetQuery(
    ["profile", "details"],
    "/students/byNIM",
    { onError: (err) => console.log("er123", err) }
  );

  useEffect(() => {
    refetch();
  }, []);

  if (isFetching) return <ScreenSpinner />;
  console.log("data", data);
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
