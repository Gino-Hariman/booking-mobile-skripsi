import { Input, Text, View } from "native-base";

type DetailFieldProps = {
  label: string;
  value: string;
  color: string;
  isDisabled: boolean;
  variant: string;
};

const DetailField = ({
  label,
  value,
  placeholder,
  isDisabled = true,
  variant = "underlined",
}: DetailFieldProps) => {
  return (
    <View mb={8}>
      <Text
        color="gray.600"
        fontWeight="medium"
        fontSize="md-1"
        lineHeight={15}
        mb={2}
      >
        {label}
      </Text>

      <Input
        color="primary.800"
        fontSize="md-2"
        fontWeight="medium"
        placeholder={placeholder}
        px={0}
        isDisabled={isDisabled}
        variant={variant}
        value={value}
      />
    </View>
  );
};

export default DetailField;
