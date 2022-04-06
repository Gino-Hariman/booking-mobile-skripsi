import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHeader from 'components/navigation/headers/MainHeader';
import MyHistory from 'screens/MyHistory';
import { HistoryParamList } from 'types/HistoryParamList';

const Stack = createNativeStackNavigator<HistoryParamList>();

const HistoryStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => null,
        headerTitle: '',
        headerLeft: () => <MainHeader />,
      }}>
      <Stack.Screen name="HistoryScreen" component={MyHistory} />
    </Stack.Navigator>
  );
};

export default HistoryStack;
