import { Button, Text, View, VStack } from 'native-base';

const LocationFooter = () => {
  return (
    <View
      py="12px"
      px={4}
      bgColor="shade.FG"
      shadow={3}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <VStack space={1}>
        <Text fontSize="md-1" fontWeight="medium" lineHeight="15px">
          Booking Date
        </Text>
        <Text fontSize="md-3" fontWeight="semibold" lineHeight="20px">
          1 March 2022
        </Text>
      </VStack>
      <Button
        rounded="full"
        px={6}
        py={3}
        _text={{ color: 'primary.50', fontSize: 'md-2', fontWeight: 'semibold' }}>
        Continue Booking
      </Button>
    </View>
  );
};

export default LocationFooter;
