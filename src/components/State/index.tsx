import { Button, Container, Text, View, VStack } from "native-base";
import Empty from "@Illus/empty.svg";
import React from "react";

type Props = {
  title: string;
  btnText: string;
  subTitle: string;
  Illus: React.ReactType;
  handlePress: () => void;
};

const State = ({ title, subTitle, btnText, Illus, handlePress }: Props) => {
  return (
    <View flex={0.8} alignItems="center" justifyContent="center" px={16}>
      <VStack space={6}>
        {/* <Empty width={240} height={240} /> */}
        <Illus width={240} height={240} />
        <Text
          textAlign="center"
          color="gray.800"
          fontSize="lg-1"
          fontWeight="semibold"
          lineHeight="30px"
        >
          {title}
        </Text>
        {subTitle && (
          <Text
            textAlign="center"
            color="gray.800"
            fontSize="md-2"
            fontWeight="normal"
            lineHeight="21px"
          >
            {subTitle}
          </Text>
        )}

        <Container alignSelf="center">
          <Button onPress={handlePress}>{btnText}</Button>
        </Container>
      </VStack>
    </View>
  );
};

export default State;
