import MainContainer from 'components/containers/MainContainer';
import MyHistoryList from 'components/list/MyHistoryList';
import seats from '_mocks_/seats';

const MyHistory = () => {
  return (
    <MainContainer px={4}>
      <MyHistoryList data={seats} />
    </MainContainer>
  );
};

export default MyHistory;
