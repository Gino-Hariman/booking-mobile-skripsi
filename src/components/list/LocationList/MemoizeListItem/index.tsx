import LocationCard from 'components/cards/LocationCard';
import { View } from 'native-base';

type Props = {
  width: string;
  handlePress: () => void;
};

const MemoizeListItem = ({ item, width, handlePress }: Props) => (
  <View width={width}>
    <LocationCard url={item.url} title={item.title} caption={item.caption} onPress={handlePress} />
  </View>
);

export default MemoizeListItem;
