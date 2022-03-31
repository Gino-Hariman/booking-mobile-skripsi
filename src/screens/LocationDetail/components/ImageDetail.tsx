import { AspectRatio, Heading, Image, Stack, Text, View } from 'native-base';

const ImageDetail = () => {
  return (
    <View>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
          }}
          alt="image"
        />
      </AspectRatio>
      <View bgColor="primary.700">
        <Stack p={4} space={1}>
          <Text color="primary.200" fontWeight="medium" lineHeight="15px" fontSize="md-1">
            UPH Aryaduta Campus Medan
          </Text>
          <Heading fontSize="lg-2" fontWeight="semibold" lineHeight="33px" color="primary.50">
            Aryaduta Lounge
          </Heading>
        </Stack>
      </View>
    </View>
  );
};

export default ImageDetail;
