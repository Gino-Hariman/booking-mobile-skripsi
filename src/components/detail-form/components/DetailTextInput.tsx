import { Box, FormControl, Input, View, WarningOutlineIcon } from "native-base";
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

const DetailTextInput = ({
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
    <Box mb={8}>
      <FormControl isInvalid={isError}>
        <FormControl.Label
          _text={{
            color: "gray.600",
            fontWeight: "medium",
            fontSize: "md-1",
          }}
        >
          {label}
        </FormControl.Label>
        <Input
          color="primary.800"
          fontSize="md-2"
          px={0}
          fontWeight="medium"
          autoCorrect={false}
          autoCapitalize="none"
          isDisabled={isDisabled}
          variant="underlined"
          keyboardType={keyboardType || "default"}
          value={field.value}
          onBlur={field.onBlur}
          onChangeText={field.onChange}
          placeholder={placeholder}
        />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Try different from previous passwords.
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
};

export default DetailTextInput;
