import { Badge } from "native-base";

type Props = {
  title: string;
  colorScheme: string;
};

const Status = ({ title, colorScheme }: Props) => {
  return (
    <Badge colorScheme={colorScheme} variant="statusOutline">
      {title}
    </Badge>
  );
};

export default Status;
