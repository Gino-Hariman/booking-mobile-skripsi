import { extendTheme } from 'native-base';
import main from './main';
import radius from './radius';
import typography from './typography';

const styles = extendTheme({
  fontConfig: {
    Poppins: {
      400: {
        normal: 'PoppinsRegular',
      },
      500: {
        normal: 'PoppinsMedium',
      },
      600: {
        normal: 'PoppinsSemiBold',
      },
      700: {
        normal: 'PoppinsBold',
      },
    },
  },
  ...typography,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
  colors: main,
  radii: radius,
});

export default styles;
