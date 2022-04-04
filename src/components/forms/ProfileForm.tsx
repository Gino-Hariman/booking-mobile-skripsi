import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, FormControl, Heading, ScrollView, View } from 'native-base';
import DataForm from './DataForm';
import MainContainer from 'components/containers/MainContainer';
import useKeyboardInfo from 'hooks/devices/useKeyboardInfo';

const ProfileForm = ({ control, errors, register, isSubmitting, onSubmit, setValue }) => {
  return (
    <MainContainer px={4}>
      <FormControl mb={5}>
        <Heading color="primary.500" fontSize="lg-4" fontWeight="bold" my={8}>
          Input Your Data
        </Heading>
        <DataForm
          forms={[
            {
              label: 'Student ID',
              name: 'student_id',
              placeholder: 'ex.03082180005',
              type: 'TextInput',
            },
            {
              label: 'Student Name',
              name: 'student_name',
              placeholder: 'Ex.farandi',
              type: 'TextInput',
            },
            {
              label: 'Class',
              name: 'class',
              placeholder: 'ex.18TI2',
              type: 'TextInput',
            },
            {
              label: 'Major',
              name: 'major',
              placeholder: 'Ex. Informatics',
              type: 'TextInput',
            },
          ]}
          register={register}
          errors={errors}
          control={control}
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

export default ProfileForm;
