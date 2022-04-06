import DateButton from 'components/buttons/DateButton';
import DateIconButton from 'components/buttons/DateIconButton';
import dayjs from 'dayjs';
import { HStack, Stack } from 'native-base';
import { useState } from 'react';
import { dateMonthFormat, dayOfWeeksFormat } from 'utils/dateTimeFormat';
import { getDateByIndex } from 'utils/selectDate';

const SelectDateSection = () => {
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState('');

  const onSelectDate = (data: string) => {
    console.log('data', data);
    setActive(data);
  };

  return (
    <HStack flex={1} space={5} py={5} justifyContent="space-between">
      <HStack flex={4} space={2}>
        {getDateByIndex().map((i, idx) => {
          const date = dayjs(i).format(dateMonthFormat);
          const dayOfWeeks = dayjs(i).format(dayOfWeeksFormat);
          return (
            <DateButton
              key={idx}
              active={active === date}
              date={date}
              dayOfWeeks={dayOfWeeks}
              handlePress={() => onSelectDate(date)}
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
