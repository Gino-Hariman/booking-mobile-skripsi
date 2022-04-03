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
}: TextInputProps) => {
  const { field } = useController<FormValues>({
    control,
    defaultValue: '',
    name,
  });
  const isError = errors && errors[name];
  return (
    <View>
      <Text color="gray.600" mb={2}>
        {label}
      </Text>

      <Input
        // color={color}
        // error={isError}
        type={inputType}
        keyboardType={keyboardType || 'default'}
        value={field.value}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        placeholder={placeholder}
      />
      {isError && <Text>{errors[name].message}</Text>}
    </View>
  );
};

export default TextInput;
