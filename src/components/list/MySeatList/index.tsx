import SeatCard from "components/cards/SeatCard";
import { Divider, FlatList, Text } from "native-base";

import { ListItem } from "../components";

const MySeatList = ({ data }) => {
  const renderSeatCard = ({ item }) => (
    <ListItem>
      <SeatCard status={item.order_status} detail={item} />
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

export default MySeatList;
