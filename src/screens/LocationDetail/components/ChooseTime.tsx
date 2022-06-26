import TimeCheckbox from "components/checkboxs/TimeCheckbox";
import { Box, Text, VStack } from "native-base";
import { useState } from "react";
import TimeListType from "types/times/TimeList";

type Props = {
  data: TimeListType;
};

const ChooseTime = ({ data, time, setTime }: Props) => {
  const [groupValue, setGroupValue] = useState<TimeListType[]>();

  const renderTimeCheckbox = (item: TimeListType) => (
    <TimeCheckbox
      checked={time === item.id_time}
      setGroupValue={setTime}
      data={item}
      key={item.id_time}
    />
  );

  return (
    <Box>
      <Text
        mt={5}
        mb={4}
        color="primary.500"
        fontSize="md-4"
        fontWeight="semibold"
      >
        Choose time
      </Text>
      <VStack space={2}>{data.map(renderTimeCheckbox)}</VStack>
    </Box>
  );
};

export default ChooseTime;
