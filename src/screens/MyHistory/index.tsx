import MainContainer from "components/containers/MainContainer";
import MyHistoryList from "components/list/MyHistoryList";
import useGetQuery from "hooks/useGetQuery";
import seats from "_mocks_/seats";
import * as SecureStore from "expo-secure-store";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
import State from "components/State";
import history from "@Illus/history.svg";

const MyHistory = () => {
  const { data, isFetching } = useGetQuery(["my-history"], `/book/history`);

  if (isFetching) return <ScreenSpinner />;

  return (
    <MainContainer px={4}>
      <State
        title="History is still empty"
        subTitle="Find your best spot to learn at UPH Medan Campus Lounge"
        Illus={history}
        btnText="Find Now"
      />
      {/* <MyHistoryList data={data} /> */}
    </MainContainer>
  );
};

export default MyHistory;
