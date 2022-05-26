import { Flex, HStack, Text, View, VStack } from "native-base";
import TimeIcon from "@Icons/Outline/Time.svg";
import CalendarIcon from "@Icons/Outline/Calendar.svg";
import Status from "components/Status";
import checkStatusStyle from "helpers/checkStatusStyle";

const SeatCard = ({ status, detail }) => {
  return (
    <View flexDirection="row" justifyContent="space-between">
      <VStack>
        <Text color="gray.600" fontSize="md-1" mb={3}>
          {`ID: ${detail.order_id}`}
        </Text>
        <Text color="gray.800" fontWeight="semibold" fontSize="md-3" mb={2}>
          {`${detail.name_location} - ${detail.spot_name}`}
        </Text>
        <HStack space={4}>
          <Flex flexDirection="row">
            <TimeIcon width={20} height={20} />
            {/* <Spacer /> */}
            <Text ml={2} color="gray.600" fontSize="md-1" fontWeight="medium">
              {detail.time}
            </Text>
          </Flex>
          <Flex flexDirection="row">
            <CalendarIcon width={20} height={20} />
            {/* <Spacer /> */}
            <Text ml={2} color="gray.600" fontSize="md-1" fontWeight="medium">
              {detail.date}
            </Text>
          </Flex>
        </HStack>
      </VStack>
      <View alignSelf="flex-end">
        <Status title="Processing" colorScheme={checkStatusStyle(status)} />
      </View>
    </View>
  );
};

export default SeatCard;
