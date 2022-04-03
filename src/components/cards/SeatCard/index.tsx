import { Button, Divider, Flex, HStack, Spacer, Text, View, VStack } from 'native-base';
import TimeIcon from '@Icons/Outline/Time.svg';
import CalendarIcon from '@Icons/Outline/Calendar.svg';
import Status from 'components/Status';

const SeatCard = () => {
  return (
    <View flexDirection="row" justifyContent="space-between">
      <VStack>
        <Text color="gray.600" fontSize="md-1" mb={3}>
          ID: 000001
        </Text>
        <Text color="gray.800" fontWeight="semibold" fontSize="md-3" mb={2}>
          Aryaduta Spot AA1
        </Text>
        <HStack space={4}>
          <Flex flexDirection="row">
            <TimeIcon width={20} height={20} />
            {/* <Spacer /> */}
            <Text ml={2} color="gray.600" fontSize="md-1" fontWeight="medium">
              10.00 - 11.00
            </Text>
          </Flex>
          <Flex flexDirection="row">
            <CalendarIcon width={20} height={20} />
            {/* <Spacer /> */}
            <Text ml={2} color="gray.600" fontSize="md-1" fontWeight="medium">
              03 Jan 2022
            </Text>
          </Flex>
        </HStack>
      </VStack>
      <View alignSelf="flex-end">
        <Status title="Processing" colorScheme="warning" />
      </View>
    </View>
  );
};

export default SeatCard;
