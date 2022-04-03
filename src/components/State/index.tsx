import { Button, Container, Text, View, VStack } from 'native-base';
import Empty from '@Illus/empty.svg';
import React from 'react';

type Props = {
  title: string;
  btnText: string;
  Illus: React.ReactType;
};

const State = ({ title, btnText, Illus }: Props) => {
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
          lineHeight="30px">
          {title}
        </Text>
        <Container alignSelf="center">
          <Button>{btnText}</Button>
        </Container>
      </VStack>
    </View>
  );
};

export default State;
