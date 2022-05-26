import { Button, Container, FormControl, Heading } from "native-base";

import MainContainer from "components/containers/MainContainer";

import LogoutIcon from "@Icons/Outline/Logout.svg";

import { DetailField } from "./components";
import changeProfileLable from "helpers/changeProfileLabel";

const ProfileDetail = ({ datas, handleLogout }) => {
  return (
    <MainContainer px={4}>
      <FormControl mb={5}>
        <Heading color="primary.500" fontSize="lg-4" fontWeight="bold" my={8}>
          Profile
        </Heading>
        {Object.entries(datas).map((entry) => {
          const [key, value] = entry;
          if (key === "id_program") return;
          return (
            <DetailField
              key={key}
              label={changeProfileLable(key)}
              value={value}
              variant="underlined"
            />
          );
        })}
      </FormControl>
      <Container mt={12} alignSelf="center">
        <Button
          onPress={handleLogout}
          leftIcon={<LogoutIcon width={24} height={24} color="white" />}
        >
          Logout
        </Button>
      </Container>
    </MainContainer>
  );
};

export default ProfileDetail;
