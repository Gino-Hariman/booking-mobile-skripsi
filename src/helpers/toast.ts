import Toast from "react-native-toast-message";

type config = {
  type: "error" | "success" | "info";
  title: string;
  subTitle: string;
};

const toast = (config: config) => {
  Toast.show({
    type: config.type,
    text1: config.title,
    text2: config.subTitle,
  });
};

export default toast;
