import { KeyboardTypeOptions } from 'react-native';
import * as Form from './components';

type FormsType = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
};

type Props = {
  forms: FormsType[];
  register: any;
  control: any;
  errors: { [key: string]: string };
  keyboardType?: KeyboardTypeOptions;
};

const DataForm = ({ forms = [], register, control, errors, keyboardType }: Props): JSX.Element => {
  return (
    <>
      {forms.map((form) => {
        const Comp = Form[form.type];
        return (
          <Comp
            key={form.name}
            register={register}
            errors={errors}
            control={control}
            {...form}
            keyboardType={keyboardType}
          />
        );
      })}
    </>
  );
};
export default DataForm;
