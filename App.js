import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ShowsScreen } from "./src/screens/ShowsScreen";
import { DetailsScreen } from "./src/screens/DetailsScreen";
import { colors } from "./src/colors";
import { WatchedScreen } from "./src/screens/WatchedScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const iconName = route.name === "Shows" ? "md-home" : "md-tv";
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Shows" component={ShowsScreen} />
    <Tab.Screen name="Watched" component={WatchedScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: colors.background },
            headerBackTitle: "Home",
          }}
        >
          <Stack.Screen
            name="Home"
            component={TabStack}
            options={{ title: "Essential React Native" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
