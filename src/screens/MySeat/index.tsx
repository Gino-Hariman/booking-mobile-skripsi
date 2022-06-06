import MainContainer from "components/containers/MainContainer";
import MySeatList from "components/list/MySeatList";
import State from "components/State";
import seats from "_mocks_/seats";
// import Empty from "@Illus/empty.svg";
import Empty from "@Illus/mySeat.svg";

const MySeat = () => {
  return (
    <MainContainer px={4}>
      {/* <State
        title="Seat is still empty Let’s start by Loggin in first"
        // subTitle="find your best spot to study at uph medan campus lounge"
        Illus={Empty}
        btnText="Login"
      /> */}
      <MySeatList data={seats} />
    </MainContainer>
  );
};

export default MySeat;
