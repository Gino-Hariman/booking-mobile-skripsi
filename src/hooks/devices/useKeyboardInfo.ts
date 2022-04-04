import { useState, useRef, useEffect } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboardInfo = () => {
  const [info, setInfo] = useState({ height: 0 });
  const subscriptions = useRef([]);

  useEffect(() => {
    const handleAndroidKeyboardChange = (e) => setInfo({ height: e.endCoordinates.height });

    const handleIOSKeyboardChange = (e) => {
      if (e.startCoordinates && e.endCoordinates.screenY <= e.startCoordinates.screenY)
        return setInfo({ height: e.endCoordinates.height });
      return setInfo({ height: 0 });
    };

    if (Platform.OS === 'ios') {
      subscriptions.current = [
        Keyboard.addListener('keyboardWillChangeFrame', handleIOSKeyboardChange),
      ];
    } else {
      subscriptions.current = [
        Keyboard.addListener('keyboardDidHide', handleAndroidKeyboardChange),
        Keyboard.addListener('keyboardDidShow', handleAndroidKeyboardChange),
      ];
    }
    return () => {
      subscriptions.current.forEach((subscription) => {
        subscription.remove();
      });
    };
  }, [subscriptions]);

  return { ...info };
};

export default useKeyboardInfo;
