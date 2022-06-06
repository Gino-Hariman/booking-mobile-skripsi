import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Container,
  FormControl,
  Heading,
  ScrollView,
  View,
} from "native-base";

import MainContainer from "components/containers/MainContainer";
import useKeyboardInfo from "hooks/devices/useKeyboardInfo";
import DataForm from "components/forms/DataForm";
import DetailForm from "./DetailForm";
import LogoutIcon from "@Icons/Outline/Logout.svg";
import useGetQuery from "hooks/useGetQuery";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
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
        {/* <DetailForm
          forms={[
            {
              label: "Student ID",
              name: "student_id",
              placeholder: "ex.03082180005",
              type: "DetailField",
              variant: "underlined",
              isDisabled: true,
            },
            {
              label: "Student Name",
              name: "student_name",
              placeholder: "Ex.farandi",
              type: "DetailField",
              variant: "underlined",
              isDisabled: true,
            },
            {
              label: "Class",
              name: "class",
              placeholder: "ex.18TI2",
              type: "DetailField",
              variant: "underlined",
              isDisabled: true,
            },
            {
              label: "Major",
              name: "major",
              placeholder: "Ex. Informatics",
              type: "DetailField",
              variant: "underlined",
              isDisabled: true,
            },
          ]}
        /> */}
      </FormControl>
      <Container mt={12} alignSelf="center">
        <Button
          onPress={handleLogout}
          leftIcon={<LogoutIcon width={24} height={24} color="white" />}
        >
          Logout
        </Button>
      </Container>

      {/* <View style={{ height: keyboardHeight + 60 }} /> */}
    </MainContainer>
  );
};

export default ProfileDetail;
