import SeatCard from 'components/cards/SeatCard';
import { Divider, FlatList } from 'native-base';
import { ListItem } from '../components';

const MyHistoryList = ({ data }) => {
  const renderSeatCard = ({ item }) => (
    <ListItem>
      <SeatCard />
    </ListItem>
  );
  return (
    <FlatList
      overScrollMode="never"
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={renderSeatCard}
      ItemSeparatorComponent={() => <Divider bg="shade.BD" />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MyHistoryList;
