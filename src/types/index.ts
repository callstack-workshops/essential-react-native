import { StyleProp, ViewStyle } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type Image = {
  mobile: string;
  default: string;
  backdrop: string;
};

export type Show = {
  id: number;
  images: Image;
  name: string;
  overview: string;
  voteAverage: number;
  year: number;
};

export type TouchableProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  accessibilityRole?: string;
};

// navigation types
export type RootStackParamList = {
  Home: undefined;
  Details: { show: Show };
  Watched: undefined;
};

export type TabParamList = {
  Shows: undefined;
  Watched: undefined;
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;
export type WatchedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Watched"
>;
