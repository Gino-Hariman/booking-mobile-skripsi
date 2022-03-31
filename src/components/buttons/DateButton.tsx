import { Button, Heading, Pressable, Text, View, VStack } from 'native-base';

const DateButton = ({ date, dayOfWeeks, handlePress, active }) => {
  return (
    <Pressable
      onPress={handlePress}
      flex={1}
      alignItems="center"
      justifyContent="center"
      borderRadius={0}
      borderWidth="1px"
      borderColor="primary.100"
      backgroundColor={active ? 'primary.500' : 'shade.BG'}>
      <VStack alignItems="center" space={1}>
        <Text
          color={active ? 'primary.200' : 'primary.300'}
          fontSize="sm-4"
          fontWeight="medium"
          lineHeight="12.5px">
          {date}
        </Text>
        <Heading
          fontSize="md-2"
          fontWeight="semibold"
          color={active ? 'primary.50' : 'primary.500'}>
          {dayOfWeeks}
        </Heading>
      </VStack>
    </Pressable>
  );
};
export default DateButton;
