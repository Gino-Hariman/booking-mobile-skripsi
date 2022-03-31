import { Flex, HStack, Image, Text, View } from 'native-base';
import LogoUPH from '../../../../assets/logo-uph.png';

const MainHeader = () => {
  return (
    <HStack>
      <Image w={106} h={22} resizeMode="contain" source={LogoUPH} alt="Alternate Text" />
    </HStack>
  );
};

export default MainHeader;
