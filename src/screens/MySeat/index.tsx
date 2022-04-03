import MainContainer from 'components/containers/MainContainer';
import MySeatList from 'components/list/MySeatList';
import seats from '_mocks_/seats';

const MySeat = () => {
  return (
    <MainContainer px={4}>
      <MySeatList data={seats} />
    </MainContainer>
  );
};

export default MySeat;
