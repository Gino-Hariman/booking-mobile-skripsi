import { Box, Checkbox, Text } from "native-base";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import TimeListType from "types/times/TimeList";

type Props = {
  data: TimeListType;
  setGroupValue: Dispatch<SetStateAction<TimeListType[]>>;
};

const TimeCheckbox = ({ data, checked, setGroupValue }: Props) => {
  // const [checked, setChecked] = useState(false);

  // useEffect(()=>{

  // }, [checked])

  const handleChange = (value: TimeListType) => {
    // setChecked((prev) => !prev);
    // setGroupValue((prev) => [...prev, value]);
    if (checked) return setGroupValue(undefined);
    setGroupValue(value);
  };

  const handleBorderColor = () => {
    if (data.is_disabled) return "gray.300";
    if (checked) return "primary.500";
    return "shade.BD";
  };

  const handleBgColor = () => {
    if (data.is_disabled) return "shade.BG";
    if (checked) return "primary.50";
    return "shade.FG";
  };

  const handleTextColor = () => {
    if (data.is_disabled) return "gray.300";
    if (checked) return "primary.500";
    return "gray.800";
  };

  return (
    <Box
      bg={handleBgColor()}
      borderWidth={1}
      borderColor={handleBorderColor()}
      pl={3}
      py={3}
    >
      <Checkbox
        w="100%"
        isChecked={checked}
        onChange={() => handleChange(data.id_time)}
        isDisabled={data.is_disabled}
        value={data.id_time}
        _text={{ color: handleTextColor() }}
        colorScheme="primary"
      >
        {data.time}
      </Checkbox>
    </Box>
  );
};
export default TimeCheckbox;
