import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Pressable,
  Stack,
  Text,
} from "native-base";
import { TouchableHighlight } from "react-native";

type Props = {
  url: string;
  title: string;
  caption: string;
  onPress: () => void;
};

const LocationCard = ({ url, title, caption, onPress }: Props) => {
  return (
    <Pressable borderRadius={2} onPress={onPress}>
      {({ isPressed }) => (
        <Box
          rounded="2"
          overflow="hidden"
          borderColor="shade.BD"
          borderWidth="1"
          bgColor={isPressed ? "shade.BG" : "shade.FG"}
          style={{
            transform: [
              {
                scale: isPressed ? 0.96 : 1,
              },
            ],
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: url,
                }}
                alt={title}
              />
            </AspectRatio>
          </Box>

          <Stack p={4} space={1}>
            <Text color="gray.600" fontWeight="medium" fontSize="md-1">
              UPH Aryaduta Campus Medan
            </Text>
            <Heading fontSize="md-4" fontWeight={600} color="gray.800">
              {title}
            </Heading>
          </Stack>
        </Box>
      )}
    </Pressable>
  );
};

export default LocationCard;
