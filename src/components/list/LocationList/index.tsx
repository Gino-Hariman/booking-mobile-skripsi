import { useNavigation } from "@react-navigation/native";
import useMatchBreakPoint from "hooks/devices/useMatchBreakpoint";
import { Box, FlatList, Flex, Text, View } from "native-base";
import { useCallback } from "react";
import {
  Pressable,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "../components";
import MemoizeListItem from "./MemoizeListItem";

type tCardWidth = {
  [key: string]: string;
};

const numColumns = {
  md: 1,
  lg: 3,
  xl: 4,
};

const cardWidth: tCardWidth = {
  md: "100%",
  lg: "33.33%",
  xl: "25%",
};

const styles = StyleSheet.create({
  contentContainer: { flex: 1 },
  flatList: { paddingVertical: 16 },
});

const LocationList = ({ data }): JSX.Element => {
  const { match } = useMatchBreakPoint({ sizes: ["md", "lg", "xl"] });
  const navigation = useNavigation();

  const handlePress = (imgUrl, locationName, spotName) => {
    navigation.navigate("LocationDetailScreen", {
      imageUrl: imgUrl,
      locationName,
      spotName,
    });
  };

  const renderLocationCard = useCallback(
    ({ item, index }): JSX.Element => (
      <View mb={6}>
        <MemoizeListItem
          key={item.id_location}
          item={item}
          width={cardWidth[match]}
          handlePress={() =>
            handlePress(item.image, item.name_location, item.spot_name)
          }
        />
      </View>
    ),

    [match]
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id_location}
      // style={styles.flatList}
      data={data}
      renderItem={renderLocationCard}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <Flex>
          <Text
            flexWrap="wrap"
            noOfLines={2}
            fontSize="lg-1"
            fontWeight="semibold"
            lineHeight={30}
            pt={4}
          >
            Hi, Explore and find
          </Text>
          <Text
            flexWrap="wrap"
            noOfLines={2}
            fontSize="lg-1"
            fontWeight="semibold"
            lineHeight={30}
            mb={6}
          >
            your best spot to learn
          </Text>
        </Flex>
      )}
    />
  );
};

export default LocationList;
