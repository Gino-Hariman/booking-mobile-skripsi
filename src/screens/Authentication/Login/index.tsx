import { yupResolver } from "@hookform/resolvers/yup";
import MainContainer from "components/containers/MainContainer";
import LoginForm from "components/forms/LoginForm";
import { useAuth } from "context/AuthContext";
import toast from "helpers/toast";
import usePostQuery from "hooks/usePostQuery";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup
  .object({
    email: yup.string().email("Invalid Email").required("Email Required"),
  })
  .required();

const Login = () => {
  const {
    setValue,
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
    },
  });

  const { login } = useAuth();

  const loginMutation = usePostQuery("/login");

  const onSubmit = (data: { email: string }) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        if (res.type === "success") {
          toast({
            type: "success",
            title: "Login",
            subTitle: "Successfully Login",
          });
          login(res.token, data.email);
        }
      },
      onError: (err) => console.log("err", err),
    });
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
