import React from "react";
import { StatusBar } from "expo-status-bar";
import { ShowsScreen } from "./src/screens/ShowsScreen";

export default function App() {
  return (
    <>
      <ShowsScreen />
      <StatusBar style="auto" />
    </>
  );
}
