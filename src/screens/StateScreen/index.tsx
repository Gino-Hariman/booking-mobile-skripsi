import State from "components/State";

const StateScreen = ({ title, subTitle, btnText, Illus, handlePress }) => {
  return (
    <State
      title={title}
      subTitle={subTitle}
      btnText={btnText}
      Illus={Illus}
      handlePress={handlePress}
    />
  );
};

export default StateScreen;
