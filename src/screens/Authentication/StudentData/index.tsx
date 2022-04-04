import { yupResolver } from '@hookform/resolvers/yup';
import ProfileForm from 'components/forms/ProfileForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup
  .object({
    student_id: yup.string().required('Student ID Required'),
    student_name: yup.string().required('Student Name Required'),
    class: yup.string().required('Class Required'),
    major: yup.string().required('Major Reuired'),
  })
  .required();

const StudentData = () => {
  const {
    setValue,
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      student_id: '',
      student_name: '',
      class: '',
      major: '',
    },
  });

  const onSubmit = (data) => {
    console.log('data form', data);
  };

  return (
    <ProfileForm
      control={control}
      errors={errors}
      register={register}
      setValue={setValue}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default StudentData;
