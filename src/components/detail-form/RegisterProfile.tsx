import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, FormControl, Heading } from "native-base";
import * as SecureStore from "expo-secure-store";

import MainContainer from "components/containers/MainContainer";

import DetailForm from "./DetailForm";

import usePostQuery from "hooks/usePostQuery";
import toast from "helpers/toast";
import { useNavigation } from "@react-navigation/native";
import { ProfileNavigationProps } from "types/NavigationProps";

const RegisterProfile = ({}) => {
  const navigation = useNavigation<ProfileNavigationProps>();
  const {
    setValue,
    getValues,
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        nim: yup.string().required("Student ID is Required!"),
        nama: yup.string().required("Student Name is Required!"),
        kelas: yup.string().required("Student Class is Required!"),
        id_program: yup.number(),
      })
    ),
    defaultValues: {
      nim: null,
      nama: null,
      kelas: null,
      id_program: null,
    },
    mode: "onBlur",
  });

  const mutation = usePostQuery("/students");

  const onSubmit = (data) => {
    mutation.mutate(
      { ...data, email: SecureStore.getItemAsync("email") },
      {
        onSuccess: (res) => {
          console.log("res", res);
          if (res.type === "success") {
            toast({
              type: "success",
              title: "Register Profile",
              subTitle: "Register Success!",
            });
            return navigation.push("ProfileScreen");
          }
        },
        onError: (err) => {
          console.log("err", err);
          toast({
            type: "error",
            title: "Register Profile",
            subTitle: "Sorry, Something went wrong",
          });
        },
      }
    );
  };
  console.log("getvalues()", getValues());
  return (
    <MainContainer px={4}>
      <FormControl mb={5}>
        <Heading color="primary.500" fontSize="lg-4" fontWeight="bold" my={8}>
          Profile
        </Heading>

        <DetailForm
          forms={[
            {
              label: "Student ID",
              name: "nim",
              placeholder: "ex.03082180005",
              type: "DetailTextInput",
              variant: "underlined",
              isDisabled: false,
            },
            {
              label: "Student Name",
              name: "nama",
              placeholder: "Ex.farandi",
              type: "DetailTextInput",
              variant: "underlined",
              isDisabled: false,
            },
            {
              label: "Class",
              name: "kelas",
              placeholder: "ex.18TI2",
              type: "DetailTextInput",
              variant: "underlined",
              isDisabled: false,
            },
            {
              label: "Major",
              name: "id_program",
              placeholder: "Ex. Informatics",
              type: "SelectInput",
              isDisabled: false,
            },
          ]}
          setValue={setValue}
          register={register}
          errors={errors}
          control={control}
        />
      </FormControl>
      <Container mt={12} alignSelf="center">
        <Button
          isLoading={isSubmitting}
          onPress={handleSubmit(onSubmit)}
          // onPress={handleLogout}
        >
          Continue
        </Button>
      </Container>

      {/* <View style={{ height: keyboardHeight + 60 }} /> */}
    </MainContainer>
  );
};

export default RegisterProfile;
