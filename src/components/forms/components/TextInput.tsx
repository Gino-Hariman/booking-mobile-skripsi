import { Input, Text, View } from 'native-base';
import { useController, UseControllerProps } from 'react-hook-form';
import { KeyboardTypeOptions } from 'react-native';

type TextInputProps = {
  label: string;
  placeholder: string;
  name: string;
  inputType: string;
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
  inputType = 'Text',
  control,
  keyboardType,
  errors,
  isDisabled = false,
  variant = 'inActive',
}: TextInputProps) => {
  const { field } = useController<FormValues>({
    control,
    defaultValue: '',
    name,
  });
  const isError = errors && errors[name];
  return (
    <View mb={8}>
      <Text color="gray.600" fontWeight="medium" fontSize="md-1" lineHeight={15} mb={2}>
        {label}
      </Text>

      <Input
        isDisabled={isDisabled}
        variant={isError ? 'error' : variant}
        type={inputType}
        keyboardType={keyboardType || 'default'}
        value={field.value}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        placeholder={placeholder}
      />
      {isError && (
        <Text mt={1} color="danger.500" fontSize="md-1" fontWeight="medium">
          {errors[name].message}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
