import { Button, Container, FormControl, Heading, Stack, Text } from 'native-base';
import DataForm from './DataForm';
import MainContainer from 'components/containers/MainContainer';
import useKeyboardInfo from 'hooks/devices/useKeyboardInfo';

const VerifyAccountForm = ({ control, errors, register, isSubmitting, onSubmit, setValue }) => {
  return (
    <MainContainer px={4}>
      <FormControl mb={5}>
        <Stack space={1} my={8}>
          <Heading color="primary.500" fontSize="lg-4" fontWeight="bold">
            Verify Account
          </Heading>
          <Text color="gray.700" fontSize="md-2" fontWeight="medium">
            Enter the verification code that send to ff80005@student.uph.edu
          </Text>
        </Stack>
        <DataForm
          forms={[
            {
              label: 'Verification Code',
              name: 'verify_code',
              placeholder: 'xxxx',
              type: 'TextInput',
            },
          ]}
          register={register}
          errors={errors}
          control={control}
          keyboardType="number-pad"
        />
      </FormControl>
      <Container mt={20} alignSelf="center">
        <Button isLoading={isSubmitting} onPress={onSubmit}>
          Continue
        </Button>
      </Container>

      {/* <View style={{ height: keyboardHeight + 60 }} /> */}
    </MainContainer>
  );
};

export default VerifyAccountForm;
