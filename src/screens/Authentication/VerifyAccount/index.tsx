import { yupResolver } from '@hookform/resolvers/yup';

import VerifyAccountForm from 'components/forms/VerifyAccountForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup
  .object({
    verify_code: yup.number().min(6).required('OTP Required'),
  })
  .required();

const VerifyAccount = () => {
  const {
    setValue,
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      verify_code: 0,
    },
  });

  const onSubmit = (data) => {
    console.log('asdf');
    console.log('data form', data);
  };

  return (
    <VerifyAccountForm
      control={control}
      errors={errors}
      register={register}
      setValue={setValue}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default VerifyAccount;
