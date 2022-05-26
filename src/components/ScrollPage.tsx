import { ScrollView } from "native-base";

const ScrollPage = ({ children }: { children: JSX.Element }) => {
  return (
    <ScrollView
      // maxW="300"
      showsVerticalScrollIndicator={false}
      h="80"
      _contentContainerStyle={{
        px: "20px",
        mb: "4",
        minW: "72",
      }}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollPage;
