import { useRoute } from "@react-navigation/native";
import LocationFooter from "components/navigation/footers/DetailFooter";
import { useAuth } from "context/AuthContext";
import { Box, Divider, Text, View } from "native-base";
import { ScrollView } from "react-native";
import times from "_mocks_/times";
import ChooseTime from "./components/ChooseTime";
import ImageDetail from "./components/ImageDetail";
import SelectDateSection from "./components/SelectDateSection";

const LocationDetail = () => {
  const { imageUrl, locationName, spotName } = useRoute().params;
  const { isLoginned } = useAuth();

  return (
    <View flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageDetail
          url={imageUrl}
          locationName={locationName}
          spotName={spotName}
        />
        <Box px={4}>
          <SelectDateSection />
          <Divider thickness={2} bg="shade.BD" />
          <ChooseTime data={times} />
        </Box>
      </ScrollView>
      {isLoginned && <LocationFooter />}
    </View>
  );
};

export default LocationDetail;
