import { yupResolver } from "@hookform/resolvers/yup";
import ProfileForm from "components/forms/ProfileForm";
import usePostQuery from "hooks/usePostQuery";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as SecureStore from "expo-secure-store";
import toast from "helpers/toast";
import { useAuth } from "context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const validationSchema = yup
  .object({
    student_id: yup.string().required("Student ID Required"),
    student_name: yup.string().required("Student Name Required"),
    class: yup.string().required("Class Required"),
    major: yup.string().required("Major Reuired"),
  })
  .required();

const StudentData = () => {
  const queryClient = useQueryClient();

  const { saveAuthToken } = useAuth();
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
      student_id: "",
      student_name: "",
      class: "",
      major: "",
    },
  });

  const registerUserMutation = usePostQuery("/students");

  const onSubmit = (data) => {
    console.log("data form", data);
    registerUserMutation.mutate(
      { ...data, email: SecureStore.getItemAsync("email") },
      {
        onSuccess: (res) => {
          // notify('success', 'Register Success!');

          if (res.type === "error")
            return toast({
              type: "error",
              title: "Register User",
              subTitle: "Sorry, Something Went Wrong!",
            });

          if (res.type === "success") {
            toast({
              type: "success",
              title: "Register Use",
              subTitle: "Successfully Login",
            });
            saveAuthToken(res);
          }

          // if (res.type === "success") {
          //   notify("success", "Register Success!");
          //   Cookies.set("token", res.loginToken);
          //   return router.replace("/");
          // }
        },
        onError: (err) => {
          toast({
            type: "error",
            title: "Register User",
            subTitle: "Sorry, Something Went Wrong!",
          });
        },
        onSettled: () => {
          queryClient.invalidateQueries(["profile", "details"]);
          return navigation.reset({
            index: 0,
            routes: [{ name: "Profile" }],
            // actions: [navigation.navigate("ProfileScreen")],
          });
        },
      }
    );
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
