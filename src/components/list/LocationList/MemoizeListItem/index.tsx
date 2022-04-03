import LocationCard from 'components/cards/LocationCard';
import { View } from 'native-base';

type Props = {
  width: string;
};

const MemoizeListItem = ({ item, width }: Props) => (
  <View width={width}>
    <LocationCard url={item.url} title={item.title} caption={item.caption} />
  </View>
);

export default MemoizeListItem;
