import { AspectRatio, Heading, Image, Stack, Text, View } from "native-base";

const ImageDetail = ({ url, locationName, spotName }) => {
  return (
    <View>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: url,
          }}
          alt="image"
        />
      </AspectRatio>
      <View bgColor="primary.700">
        <Stack p={4} space={1}>
          <Text
            color="primary.200"
            fontWeight="medium"
            lineHeight="15px"
            fontSize="md-1"
          >
            UPH Aryaduta Campus Medan
          </Text>
          <Heading
            fontSize="lg-2"
            fontWeight="semibold"
            lineHeight="33px"
            color="primary.50"
          >
            {locationName} - {spotName}
          </Heading>
        </Stack>
      </View>
    </View>
  );
};

export default ImageDetail;
