import SeatCard from "components/cards/SeatCard";
import { Box, Divider, FlatList, Stack } from "native-base";
import { ListItem } from "../components";
import Note from "../components/Note";

const MyHistoryList = ({ data }) => {
  const renderSeatCard = ({ item }) => (
    <ListItem key={item.order_id}>
      <Stack space={6}>
        <SeatCard status={item.order_status} detail={item} />
        {item.note && <Note note={item.note} handleBy={item.handle_by} />}
      </Stack>
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
