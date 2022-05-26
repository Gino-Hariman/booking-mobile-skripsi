import { Stack, Text } from "native-base";

const Note = ({ note, handleBy }) => {
  return (
    <Stack
      borderRadius={2}
      paddingY={4}
      paddingX={3}
      space={1}
      borderWidth={1}
      borderColor="gray.300"
      bg="gray.100"
    >
      <Text color="primary.300" fontSize="sm-4" fontWeight="medium">
        {` Messages from : ${handleBy}`}
      </Text>
      <Text color="primary.400" fontWeight="medium" fontSize="md-1">
        {note}
      </Text>
    </Stack>
  );
};

export default Note;
