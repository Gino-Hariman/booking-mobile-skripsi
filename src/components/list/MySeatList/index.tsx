import SeatCard from "components/cards/SeatCard";
import { Divider, FlatList } from "native-base";
import { RefreshControl } from "react-native";

import { ListItem } from "../components";

const getKey = (item) => item.order_id;

const IteratorComp = () => <Divider bg="shade.BD" />;

const renderSeatCard = ({ item }) => (
  <ListItem>
    <SeatCard status={item.order_status} detail={item} />
  </ListItem>
);
const MySeatList = ({ data, refreshing, onRefresh }) => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      overScrollMode="never"
      keyExtractor={getKey}
      data={data}
      renderItem={renderSeatCard}
      ItemSeparatorComponent={IteratorComp}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MySeatList;
