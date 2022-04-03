const button = {
  baseStyle: { py: 2, px: 4, width: 140 },
  defaultProps: {
    _text: {
      fontSize: 'md-2',
      fontWeight: 'semibold',
    },
    rounded: 'full',
    size: 'sm',
  },
  // variants: {
  //   statusOutline: ({ colorScheme }: { colorScheme: string }) => {
  //     return {
  //       bg: `${colorScheme}.50`,
  //       variant: 'outline',
  //       borderWidth: 1,
  //       borderColor: `${colorScheme}.300`,
  //       rounded: 1,
  //       _text: {
  //         color: `${colorScheme}.600`,
  //       },
  //     };
  //   },
  // },
};

export default button;
