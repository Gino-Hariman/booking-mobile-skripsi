import { Box, Pressable, Text, VStack } from 'native-base';
import Calendar from '@Icons/Fill/Calendar.svg';
import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type Props = {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const DateIconButton = ({ setDate }: Props) => {
  const [open, setOpen] = useState(false);

  const showDatePicker = () => {
    setOpen(true);
  };

  const hideDatePicker = () => {
    setOpen(false);
  };

  const handleConfirm = (date: Date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <>
      <Pressable onPress={showDatePicker}>
        {({ isPressed }) => (
          <Box
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            borderWidth="1px"
            borderColor="primary.100"
            borderRadius={0}
            bg="shade.BG"
            p={3}>
            <VStack justifyContent="center" alignItems="center" space={1}>
              <Calendar />
              <Text fontSize="sm-4" fontWeight="medium" lineHeight="12.5px" color="primary.500">
                March
              </Text>
            </VStack>
          </Box>
        )}
      </Pressable>
      <DateTimePickerModal
        minimumDate={new Date(Date.now() + 3600 * 1000 * 24)}
        isVisible={open}
        mode="date"
        display="inline"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};
export default DateIconButton;
