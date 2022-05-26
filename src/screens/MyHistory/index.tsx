import MainContainer from "components/containers/MainContainer";
import MyHistoryList from "components/list/MyHistoryList";
import useGetQuery from "hooks/useGetQuery";
import seats from "_mocks_/seats";
import * as SecureStore from "expo-secure-store";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";

const MyHistory = () => {
  const { data, isFetching } = useGetQuery(
    ["my-history"],
    `/book/history?nim=03082180011`
  );

  if (isFetching) return <ScreenSpinner />;
  console.log("data22", data);
  return (
    <MainContainer px={4}>
      <MyHistoryList data={data} />
    </MainContainer>
  );
};

export default MyHistory;
