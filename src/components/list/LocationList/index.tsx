import useMatchBreakPoint from 'hooks/devices/useMatchBreakpoint';
import { FlatList, Text, View } from 'native-base';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from '../components';
import MemoizeListItem from './MemoizeListItem';

type tCardWidth = {
  [key: string]: string;
};

const numColumns = {
  md: 1,
  lg: 3,
  xl: 4,
};

const cardWidth: tCardWidth = {
  md: '100%',
  lg: '33.33%',
  xl: '25%',
};

const styles = StyleSheet.create({
  contentContainer: { flex: 1 },
  flatList: { paddingVertical: 16 },
});

const LocationList = ({ data }): JSX.Element => {
  const { match } = useMatchBreakPoint({ sizes: ['md', 'lg', 'xl'] });

  const renderLocationCard = useCallback(
    ({ item, index }): JSX.Element => (
      <View mb={6}>
        <MemoizeListItem item={item} width={cardWidth[match]} />
      </View>
    ),
    [match],
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      // style={styles.flatList}
      data={data}
      renderItem={renderLocationCard}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <Text
          flexWrap="wrap"
          noOfLines={2}
          fontSize="lg-1"
          fontWeight="semibold"
          lineHeight={30}
          mb={6}>
          {`Hi, Explore and find 
your best spot to learn`}
        </Text>
      )}
    />
  );
};

export default LocationList;
