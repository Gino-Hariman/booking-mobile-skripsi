import { View } from 'native-base';

type Props = {
  children: React.ReactNode;
};

const ListItem = ({ children }: Props) => {
  return (
    <View mt={6} mb={5}>
      {children}
    </View>
  );
};

export default ListItem;
