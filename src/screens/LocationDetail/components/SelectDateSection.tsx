import DateButton from "components/buttons/DateButton";
import DateIconButton from "components/buttons/DateIconButton";
import dayjs from "dayjs";
import { HStack, Stack } from "native-base";
import { useEffect, useState } from "react";
import {
  dateMonthFormat,
  dayOfWeeksFormat,
  getTimeToBackendFormat,
} from "utils/dateTimeFormat";
import { getDateByIndex } from "utils/selectDate";

const SelectDateSection = ({ date, setDate, refetch }) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(date);
  }, [date]);

  const onSelectDate = (data: string) => {
    setDate(data);
    setActive(data);
    refetch();
  };
  return (
    <HStack flex={1} space={5} py={5} justifyContent="space-between">
      <HStack flex={4} space={2}>
        {getDateByIndex().map((i, idx) => {
          const btnDate = dayjs(i);
          const dayOfWeeks = dayjs(i).format(dayOfWeeksFormat);
          console.log("dayOfWeeks", dayOfWeeks);

          return (
            <DateButton
              disabled={dayOfWeeks === "Sun"}
              key={idx}
              active={
                active === btnDate.format(getTimeToBackendFormat) ||
                btnDate.format(getTimeToBackendFormat) === date
              }
              date={btnDate.format(dateMonthFormat)}
              dayOfWeeks={dayOfWeeks}
              handlePress={() =>
                onSelectDate(btnDate.format(getTimeToBackendFormat))
              }
            />
          );
        })}
      </HStack>

      <Stack flex={1.2} bg="coolGray.400">
        <DateIconButton setDate={setDate} />
      </Stack>
    </HStack>
  );
};

export default SelectDateSection;
