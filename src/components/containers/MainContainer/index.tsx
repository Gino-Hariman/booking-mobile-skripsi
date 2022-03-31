import { View } from 'native-base';

type Props = {
  [key: string]: string | React.ReactNode;
};

const MainContainer = (props: Props) => {
  const { children } = props;
  return (
    <View flex={1} width="100%" {...props}>
      {children}
    </View>
  );
};

export default MainContainer;
