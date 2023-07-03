import { StyleProp, ViewStyle } from "react-native";

type Image = {
  mobile: string;
  default: string;
  backkrop: string;
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
