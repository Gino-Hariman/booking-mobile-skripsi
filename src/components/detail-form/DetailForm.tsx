import { KeyboardTypeOptions } from "react-native";
import * as Form from "./components";

type FormsType = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  variant?: string;
  isDisabled?: boolean;
};

type Props = {
  forms: FormsType[];
  register: any;
  control: any;
  errors: { [key: string]: string };
  keyboardType?: KeyboardTypeOptions;
};

const DetailForm = ({
  forms = [],
  register,
  control,
  errors,
  keyboardType,
  setValue,
}: Props): JSX.Element => {
  return (
    <>
      {forms.map((form, idx) => {
        const Comp = Form[form.type];
        return (
          <Comp
            {...form}
            key={form.name}
            register={register}
            errors={errors}
            control={control}
            keyboardType={keyboardType}
            setValue={setValue}
          />
        );
      })}
    </>
  );
};
export default DetailForm;
