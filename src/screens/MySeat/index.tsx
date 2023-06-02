import MainContainer from "components/containers/MainContainer";
import MySeatList from "components/list/MySeatList";

import useGetQuery from "hooks/useGetQuery";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
import StateScreen from "screens/StateScreen";
import Illus from "@Illus/seat.svg";
import { useNavigation } from "@react-navigation/native";

const MySeat = () => {
  const navigation = useNavigation();
  const { data, isFetching, refetch, isRefetching } = useGetQuery(
    "all-seat",
    "/book/filtered?status=pending&page=0"
  );

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
      <MySeatList data={data} refreshing={isRefetching} onRefresh={refetch} />
    </MainContainer>
  );
};

export default MySeat;
