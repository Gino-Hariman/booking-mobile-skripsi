import { yupResolver } from "@hookform/resolvers/yup";

import VerifyAccountForm from "components/forms/VerifyAccountForm";
import { useAuth } from "context/AuthContext";
import toast from "helpers/toast";
import usePostQuery from "hooks/usePostQuery";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import * as yup from "yup";

const validationSchema = yup
  .object({
    verify_code: yup.string().required("OTP Required"),
  })
  .required();

const VerifyAccount = ({ navigation, route }) => {
  const queryClient = useQueryClient();
  const {
    setValue,
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      verify_code: "",
    },
  });

  const { loginToken } = route.params;

  const { saveAuthToken, checkUserRegister } = useAuth();

  const verifyMutation = usePostQuery("/login/verify");

  const onSubmit = (data) => {
    verifyMutation.mutate(
      { otp: data.verify_code, token: loginToken },
      {
        onSuccess: (res) => {
          if (res.type === "success") {
            toast({
              type: "success",
              title: "Verify OTP",
              subTitle: "Successfully Verify the OTP",
            });

            // if (checkUserRegister()) return saveAuthToken(res);

            saveAuthToken(res);
            // return navigation.navigate("StudentDataScreen");
          }
          if (res.type === "error")
            return toast({
              type: "error",
              title: "Verify OTP",
              subTitle: res.message,
            });
        },
        onError: (err) =>
          toast({
            type: "error",
            title: "Verify OTP",
            subTitle: "Sorry, Something went wrong!!",
          }),
        onSettled: () => {
          queryClient.invalidateQueries(["profile", "details"]);
        },
      }
    );
    // navigation.navigate('StudentDataScreen');
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
