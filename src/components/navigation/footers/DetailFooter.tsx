import dayjs from "dayjs";
import { Button, Text, View, VStack } from "native-base";
import { footerDateTimeFormat } from "utils/dateTimeFormat";

const LocationFooter = ({ date, handleSubmit }) => {
  return (
    <View
      w="full"
      py="12px"
      px={4}
      bgColor="shade.FG"
      shadow={3}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack space={1} flex={1}>
        <Text fontSize="md-1" fontWeight="medium" lineHeight="15px">
          Booking Date
        </Text>
        <Text fontSize="md-3" fontWeight="semibold" lineHeight="20px">
          {dayjs(date).format(footerDateTimeFormat)}
        </Text>
      </VStack>
      <Button
        onPress={handleSubmit}
        flex={1}
        rounded="full"
        px={6}
        py={3}
        _text={{
          color: "primary.50",
          fontSize: "md-2",
          fontWeight: "semibold",
        }}
      >
        Continue Booking
      </Button>
    </View>
  );
};

export default LocationFooter;
