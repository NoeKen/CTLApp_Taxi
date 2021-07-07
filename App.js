import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Parent from "./pages/main/parent";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Parent/>
    </NavigationContainer>
  );
}