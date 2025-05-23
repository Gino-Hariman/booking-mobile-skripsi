import { useNavigation, useRoute } from "@react-navigation/native";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
import LocationFooter from "components/navigation/footers/DetailFooter";
import { useAuth } from "context/AuthContext";
import dayjs from "dayjs";
import toast from "helpers/toast";
import useGetQuery from "hooks/useGetQuery";
import usePostQuery from "hooks/usePostQuery";
import { Box, Divider, View } from "native-base";
import { useState } from "react";
import { ScrollView } from "react-native";
import { useQueryClient } from "react-query";
import { getTimeToBackendFormat } from "utils/dateTimeFormat";
import ChooseTime from "./components/ChooseTime";
import ImageDetail from "./components/ImageDetail";
import SelectDateSection from "./components/SelectDateSection";

const LocationDetail = () => {
  const queryClient = useQueryClient();
  const { idLocation, imageUrl, locationName, spotName } = useRoute().params;
  const navigation = useNavigation();
  const { isLoginned } = useAuth();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const {
    data: timeOptions,
    isFetching: timeOptionFetching,
    refetch,
  } = useGetQuery(
    ["booking", "time", "list", date, idLocation],
    `/location/time?id_location=${idLocation}&date=${dayjs(date).format(
      getTimeToBackendFormat
    )}`,
    { enabled: dayjs(date).format(getTimeToBackendFormat) !== undefined }
  );

  const mutation = usePostQuery("/book");
  const handleSubmit = () => {
    const data = {
      id_location: idLocation,
      date: dayjs(date).format(getTimeToBackendFormat),
      id_time: time,
    };
    mutation.mutate(data, {
      onSuccess: (res) => {
        if (res.type === "error") {
          return toast({
            type: "error",
            title: "error",
            subTitle: res.message,
          });
        }
        toast({
          type: "success",
          title: "Booking",
          subTitle: "Successfully booked the seat",
        });

        return navigation.reset({
          index: 0,
          routes: [{ name: "HomeScreen" }, { name: "processing" }],
        });
      },
      onError: (err) =>
        toast({
          type: "error",
          title: "Sorry",
          subTitle: "Sorry, Something went wrong!",
        }),
      onSettled: () => {
        queryClient.invalidateQueries("all-seat");
      },
    });
  };

  return (
    <View flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageDetail
          url={imageUrl}
          locationName={locationName}
          spotName={spotName}
        />
        <Box px={4}>
          <SelectDateSection date={date} setDate={setDate} refetch={refetch} />
          {timeOptions && (
            <>
              <Divider thickness={2} bg="shade.BD" />
              {timeOptionFetching ? (
                <ScreenSpinner />
              ) : (
                <ChooseTime data={timeOptions} time={time} setTime={setTime} />
              )}
            </>
          )}
        </Box>
      </ScrollView>
      {isLoginned && <LocationFooter date={date} handleSubmit={handleSubmit} />}
    </View>
  );
};

export default LocationDetail;
