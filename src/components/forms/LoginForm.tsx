import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, FormControl, Heading } from 'native-base';
import DataForm from './DataForm';
import MainContainer from 'components/containers/MainContainer';

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const formOptions = {
  resolver: yupResolver(validationSchema),
  defaultValues: {
    email: '',
  },
};

const LoginForm = () => {
  const {
    register,
    formState: { errors, isDirty },
    control,
    handleSubmit,
  } = useForm(formOptions);

  return (
    <MainContainer px={4} flex={0.5} justifyContent="space-between">
      <FormControl>
        <Heading color="primary.500" fontSize="lg-4" fontWeight="bold" my={8}>
          Login
        </Heading>
        <DataForm
          forms={[
            {
              label: 'Student Email',
              name: 'email',
              placeholder: 'youremail@email.com',
              type: 'TextInput',
            },
          ]}
          register={register}
          errors={errors}
          control={control}
        />
      </FormControl>
      <Container alignSelf="center">
        <Button>Login</Button>
      </Container>
    </MainContainer>
  );
};

export default LoginForm;
