const badge = {
  baseStyle: { py: 2, px: 4 },
  defaultProps: {
    variant: 'outline',
  },
  variants: {
    statusOutline: ({ colorScheme }: { colorScheme: string }) => {
      return {
        bg: `${colorScheme}.50`,
        variant: 'outline',
        borderWidth: 1,
        borderColor: `${colorScheme}.300`,
        rounded: 1,
        _text: {
          color: `${colorScheme}.600`,
        },
      };
    },
  },
};

export default badge;
