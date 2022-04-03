import SeatCard from 'components/cards/SeatCard';
import MainContainer from 'components/containers/MainContainer';
import { Divider, FlatList, Text } from 'native-base';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from '../components';

const MySeatList = ({ data }) => {
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

export default MySeatList;
