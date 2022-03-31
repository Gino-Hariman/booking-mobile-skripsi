import { Box, Text, VStack } from 'native-base';
import Calendar from '@Icons/Fill/Calendar.svg';

const DateIconButton = () => {
  return (
    <Box
      borderWidth="1px"
      borderColor="primary.100"
      borderRadius={0}
      bg="shade.BG"
      p={3}
      w="100%"
      maxW="80px">
      <VStack justifyContent="center" alignItems="center" space={1}>
        <Calendar />
        <Text fontSize="sm-4" fontWeight="medium" lineHeight="12.5px" color="primary.500">
          March
        </Text>
      </VStack>
    </Box>
  );
};
export default DateIconButton;
