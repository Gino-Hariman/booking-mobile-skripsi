import { KeyboardTypeOptions } from 'react-native';
import * as Form from './components';

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
};

const DetailForm = ({ forms = [] }: Props): JSX.Element => {
  return (
    <>
      {forms.map((form) => {
        const Comp = Form[form.type];
        return <Comp key={form.name} {...form} />;
      })}
    </>
  );
};
export default DetailForm;
