import { Spinner, View } from 'native-base';

const ScreenSpinner = ({ bg = 'shade.FG' }): JSX.Element => (
  <View w="100%" flex={1} justifyContent="center" alignItems="center" bg={bg}>
    <Spinner size="lg" />
  </View>
);

export default ScreenSpinner;
