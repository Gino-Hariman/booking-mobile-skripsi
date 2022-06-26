import MainContainer from "components/containers/MainContainer";
import MyHistoryList from "components/list/MyHistoryList";
import useGetQuery from "hooks/useGetQuery";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
import Illus from "@Illus/history.svg";
import StateScreen from "screens/StateScreen";
import { useNavigation } from "@react-navigation/native";

const MyHistory = () => {
  const navigation = useNavigation();
  const { data, isFetching } = useGetQuery(["my-history"], `/book/history`);

  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };

  if (isFetching) return <ScreenSpinner />;

  if (!Boolean(data?.length))
    return (
      <StateScreen
        title="Seat is still empty"
        subTitle="Find your best spot to learn at Lounge UPH Medan Campus"
        btnText="Find Now"
        Illus={Illus}
        handlePress={handlePress}
      />
    );

  return (
    <MainContainer px={4}>
      <MyHistoryList data={data} />
    </MainContainer>
  );
};

export default MyHistory;
