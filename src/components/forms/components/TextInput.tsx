import { Box, FormControl, Input, WarningOutlineIcon } from "native-base";
import { useController } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";

type TextInputProps = {
  label: string;
  placeholder: string;
  name: string;
  inputType?: string;
  keyboardType: KeyboardTypeOptions;
  color: string;
  control: any;
  errors: string;
  isDisabled: boolean;
  variant: string;
};

type FormValues = {
  [key: string]: string;
};

const TextInput = ({
  label,
  placeholder,
  name,
  control,
  keyboardType,
  errors,
  isDisabled = false,
  variant = "inActive",
}: TextInputProps) => {
  const { field } = useController<FormValues>({
    control,
    defaultValue: "",
    name,
  });

  const isError = errors && errors[name];
  return (
    <Box alignItems="center">
      <FormControl isInvalid={isError}>
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          isDisabled={isDisabled}
          variant={isError ? "error" : variant}
          keyboardType={keyboardType || "default"}
          value={field.value}
          onBlur={field.onBlur}
          onChangeText={field.onChange}
          placeholder={placeholder}
        />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Invalid Email
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
};

export default TextInput;
