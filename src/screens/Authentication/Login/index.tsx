import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import MainContainer from 'components/containers/MainContainer';
import LoginForm from 'components/forms/LoginForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup
  .object({
    email: yup.string().email('Invalid Email').required('Email Required'),
  })
  .required();

const Login = () => {
  const navigation = useNavigation();
  const {
    setValue,
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data) => {
    console.log('data form', data);
    navigation.navigate('VerifyAccScreen');
  };

  return (
    <LoginForm
      control={control}
      errors={errors}
      register={register}
      setValue={setValue}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default Login;
