import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCard from "components/cards/LocationCard";
import LocationList from "components/list/LocationList";
import locations from "_mocks_/locations";
import MainContainer from "components/containers/MainContainer";
import { ScrollView, Text } from "native-base";
import LocationDetail from "screens/LocationDetail";
import State from "components/State";
import Empty from "@Illus/empty.svg";
import { useAuth } from "context/AuthContext";
import useGetQuery from "hooks/useGetQuery";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";

const MyHome = () => {
  const { data, isFetching, refetch, isRefetching } = useGetQuery(
    ["all-location"],
    "/location"
  );

  if (isFetching) return <ScreenSpinner />;
  return (
    // <LocationDetail />
    // <State Illus={Empty} title="asdfafsaf " btnText="asflsao" />
    <MainContainer px={4}>
      <LocationList data={data} refreshing={isRefetching} onRefresh={refetch} />
    </MainContainer>
  );
};

export default MyHome;
