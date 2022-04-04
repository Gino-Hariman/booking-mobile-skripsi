const input = {
  baseStyle: { py: 3, px: 5 },
  defaultProps: {
    rounded: 'full',
    borderWidth: 1,
    placeholderTextColor: 'shade.BD',
    fontSize: 'md-2',
    fontWeight: 'medium',
    _hover: {
      borderColor: 'primary.600',
    },
    _focus: {
      borderColor: 'primary.500',
    },
    _invalid: {
      borderColor: 'danger.500',
    },
    // _disabled: {
    //   placeholderTextColor: 'muted.700',
    //   _hover: {
    //     borderColor: 'muted.300',
    //   },
    // },
  },
  variants: {
    inActive: () => {
      return {
        borderColor: 'gray.500',
      };
    },
    error: ({ colorScheme }: { colorScheme: string }) => {
      return {
        borderColor: 'danger.500',
      };
    },
  },
};

export default input;
