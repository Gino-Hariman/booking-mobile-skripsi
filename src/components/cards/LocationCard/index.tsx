import { AspectRatio, Box, Heading, Image, Stack, Text } from 'native-base';
import { TouchableHighlight } from 'react-native';

type Props = {
  url: string;
  title: string;
  caption: string;
  onPress: () => void;
};

const LocationCard = ({ url, title, caption, onPress }: Props) => {
  return (
    <TouchableHighlight
      style={{
        flex: 1,
        borderRadius: 8,
      }}
      activeOpacity={0.98}
      onPress={onPress}>
      <Box rounded="2" overflow="hidden" borderColor="shade.BD" borderWidth="1" bgColor="shade.FG">
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>

        <Stack p={4} space={1}>
          <Text color="gray.600" fontWeight="medium" fontSize="md-1">
            UPH Aryaduta Campus Medan
          </Text>
          <Heading fontSize="md-4" fontWeight={600} color="gray.800">
            Aryaduta Lounge
          </Heading>
        </Stack>
      </Box>
    </TouchableHighlight>
  );
};

export default LocationCard;
