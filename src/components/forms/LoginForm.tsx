import { Button, Container, FormControl, Heading } from "native-base";
import DataForm from "./DataForm";
import MainContainer from "components/containers/MainContainer";
import usePostQuery from "hooks/usePostQuery";
import ScrollPage from "components/ScrollPage";

const LoginForm = ({
  control,
  errors,
  register,
  isSubmitting,
  onSubmit,
  setValue,
}) => {
  return (
    <ScrollPage>
      <MainContainer px={4}>
        <FormControl mb={5}>
          <Heading color="primary.500" fontSize="lg-4" fontWeight="bold" my={8}>
            Login
          </Heading>
          <DataForm
            forms={[
              {
                label: "Student Email",
                name: "email",
                placeholder: "youremail@email.com",
                type: "TextInput",
              },
            ]}
            register={register}
            errors={errors}
            control={control}
          />
        </FormControl>
        <Container mt={20} alignSelf="center">
          <Button isLoading={isSubmitting} onPress={onSubmit}>
            Login
          </Button>
        </Container>

        {/* <View style={{ height: keyboardHeight + 60 }} /> */}
      </MainContainer>
    </ScrollPage>
  );
};

export default LoginForm;
