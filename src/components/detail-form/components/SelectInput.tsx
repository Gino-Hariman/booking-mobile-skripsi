import useGetQuery from "hooks/useGetQuery";
import {
  Center,
  CheckIcon,
  FormControl,
  Select,
  Spinner,
  Text,
  WarningOutlineIcon,
} from "native-base";
import { useState } from "react";
import { useController } from "react-hook-form";

const SelectInput = ({
  label,
  placeholder,
  name,
  control,
  errors,
  setValue,
}) => {
  let [selected, setSelected] = useState("");
  const { field } = useController({
    control,
    name,
  });

  const { data, isFetching } = useGetQuery(["program-all"], "/program");

  const isError = errors && errors[name];

  const handleSelect = (itemValue) => {
    setSelected(itemValue);
    setValue(name, itemValue);
  };

  return (
    <Center>
      <FormControl isRequired isInvalid={isError}>
        <Text color={"gray.600"}>{label}</Text>
        <Select
          selectedValue={selected}
          minWidth="200"
          accessibilityLabel="Choose item"
          placeholder={placeholder}
          _selectedItem={{
            bg: "primary.700",
            color: "danger.400",
            endIcon: <CheckIcon size={5} />,
            _text: { color: "primary.100" },
          }}
          mt="1"
          onValueChange={(itemValue) => handleSelect(itemValue)}
        >
          {isFetching ? (
            <Spinner />
          ) : (
            data.map((item) => (
              <Select.Item
                key={item.id_program}
                label={item.program_name}
                value={item.id_program}
              />
            ))
          )}
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};

export default SelectInput;
