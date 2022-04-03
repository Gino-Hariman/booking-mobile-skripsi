import LocationCard from 'components/cards/LocationCard';
import { View } from 'native-base';

type Props = {
  width: string;
};

const MemoizeListItem = ({ item, width }: Props) => (
  <View>
    <LocationCard url={item.url} title={item.title} caption={item.caption} />
  </View>
);

export default MemoizeListItem;
