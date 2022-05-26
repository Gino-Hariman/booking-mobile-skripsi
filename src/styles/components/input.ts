const input = {
  baseStyle: { py: 3, px: 5 },
  defaultProps: {
    bgColor: "transparent",
    placeholderTextColor: "shade.BD",
    fontSize: "md-2",
    fontWeight: "medium",
    _hover: {
      borderColor: "primary.600",
    },
    _focus: {
      borderColor: "primary.500",
    },
    _invalid: {
      borderColor: "danger.500",
    },
  },
  variants: {
    inActive: () => {
      return {
        borderWidth: 1,
        rounded: "full",
        borderColor: "gray.500",
      };
    },
    error: ({ colorScheme }: { colorScheme: string }) => {
      return {
        borderWidth: 1,
        rounded: "full",
        borderColor: "danger.500",
      };
    },
  },
};

export default input;
