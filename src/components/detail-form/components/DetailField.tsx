import { Input, Text, View } from 'native-base';
import { useController, UseControllerProps } from 'react-hook-form';
import { KeyboardTypeOptions } from 'react-native';

type DetailFieldProps = {
  label: string;
  placeholder: string;
  color: string;
  isDisabled: boolean;
  variant: string;
};

const DetailField = ({
  label,
  placeholder,

  isDisabled = true,
  variant = 'underlined',
}: DetailFieldProps) => {
  return (
    <View mb={8}>
      <Text color="gray.600" fontWeight="medium" fontSize="md-1" lineHeight={15} mb={2}>
        {label}
      </Text>

      <Input
        color="primary.800"
        fontSize="md-2"
        fontWeight="medium"
        px={0}
        isDisabled={isDisabled}
        variant={variant}
        value={placeholder}
      />
    </View>
  );
};

export default DetailField;
