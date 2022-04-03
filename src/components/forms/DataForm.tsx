import { KeyboardTypeOptions } from 'react-native';
import * as Form from './components';

type FormsType = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  keyboardType?: KeyboardTypeOptions;
};

type Props = {
  forms: FormsType[];
  register: any;
  control: any;
  errors: { [key: string]: string };
};

const DataForm = ({ forms = [], register, control, errors }: Props): JSX.Element => {
  return (
    <>
      {forms.map((form) => {
        const Comp = Form[form.type];
        return (
          <Comp key={form.name} register={register} errors={errors} control={control} {...form} />
        );
      })}
    </>
  );
};
export default DataForm;
