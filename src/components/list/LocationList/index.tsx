import LocationCard from 'components/cards/LocationCard';
import MainContainer from 'components/containers/MainContainer';
import useMatchBreakPoint from 'hooks/devices/useMatchBreakpoint';
import { Text } from 'native-base';
import { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
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
  flatList: { paddingHorizontal: 8 },
});

const LocationList = ({ data }): JSX.Element => {
  const { match } = useMatchBreakPoint({ sizes: ['md', 'lg', 'xl'] });

  const renderLocationCard = useCallback(
    ({ item, index }): JSX.Element => <MemoizeListItem item={item} width={cardWidth[match]} />,
    [match],
  );

  return (
    <FlatList
      key={match}
      // style={styles.flatList}
      data={data}
      renderItem={renderLocationCard}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <Text fontSize="lg-1" fontWeight="semibold" lineHeight={30}>
          {`Hi, Explore and find
your best spot to learn`}
        </Text>
      )}
    />
  );
};

export default LocationList;
