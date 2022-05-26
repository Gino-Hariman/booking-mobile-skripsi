import { StackNavigationProp } from "@react-navigation/stack";
import { HistoryParamList } from "./HistoryParamList";
import { HomeParamList } from "./HomeParamList";
import { ProfileParamList } from "./ProfileParamList";
import { SeatParamList } from "./SeatParamList";

export type ProfileNavigationProps = StackNavigationProp<ProfileParamList>;
export type HistoryNavigationProps = StackNavigationProp<HistoryParamList>;
export type HomeNavigationProps = StackNavigationProp<HomeParamList>;
export type SeatNavigationProps = StackNavigationProp<SeatParamList>;
