import { useNavigation, useRoute } from "@react-navigation/native";
import ScreenSpinner from "components/feedbacks/loader/ScreenSpinner";
import LocationFooter from "components/navigation/footers/DetailFooter";
import { useAuth } from "context/AuthContext";
import toast from "helpers/toast";
import useGetQuery from "hooks/useGetQuery";
import usePostQuery from "hooks/usePostQuery";
import { Box, Divider, Spinner, Text, View } from "native-base";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import times from "_mocks_/times";
import ChooseTime from "./components/ChooseTime";
import ImageDetail from "./components/ImageDetail";
import SelectDateSection from "./components/SelectDateSection";

const LocationDetail = () => {
  const { idLocation, imageUrl, locationName, spotName } = useRoute().params;
  const navigation = useNavigation();
  const { isLoginned } = useAuth();
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState();
  const {
    data: timeOptions,
    isFetching: timeOptionFetching,
    refetch,
  } = useGetQuery(
    "time-options",
    `/location/time?id_location=${idLocation}&date=${date}`,
    { enabled: Boolean(date) && Boolean(idLocation) }
  );

  useEffect(() => {
    refetch();
  }, [date]);

  const mutation = usePostQuery("/book");
  const handleSubmit = () => {
    // mutation.mutate(data, {
    //   onSuccess: (res) => console.log('res', res),
    //   onError: (err) => console.log('err', err),
    // });

    const data = {
      id_location: idLocation,
      date: date,
      id_time: time,
    };
    mutation.mutate(data, {
      onSuccess: (res) => {
        console.log("res88", res);
        console.log("res.err88", res.err);
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
        // return navigation.reset({
        //   index: 0,
        //   routes: [{ name: "processing" }],
        //   // actions: [navigation.navigate("My Home")],
        // });
        return navigation.reset({
          index: 0,
          routes: [{ name: "HomeScreen" }, { name: "processing" }],
          // actions: [navigation.navigate("My Home")],
        });
        // return navigation.navigate("processing");
      },
      onError: (err) =>
        toast({
          type: "error",
          title: "Sorry",
          subTitle: "Sorry, Something went wrong!",
        }),
    });
  };

  console.log("date,time", date, time);

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
          {Boolean(date) && (
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
      {isLoginned && <LocationFooter handleSubmit={handleSubmit} />}
    </View>
  );
};

export default LocationDetail;
