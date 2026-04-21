import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ShowsScreen } from "./src/screens/ShowsScreen";
import { DetailsScreen } from "./src/screens/DetailsScreen";
import { colors } from "./src/colors";
import { WatchedScreen } from "./src/screens/WatchedScreen";
import { RootStackParamList, TabParamList } from "./src/types";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const options: StackNavigationOptions = {
  title: "",
};

const TabStack = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const iconName = route.name === "Shows" ? "home" : "tv";
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Shows" component={ShowsScreen} />
    <Tab.Screen name="Watched" component={WatchedScreen} />
  </Tab.Navigator>
);

const screenOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: colors.background },
  headerBackTitle: "Home",
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={TabStack}
            options={{ title: "Essential React Native" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
