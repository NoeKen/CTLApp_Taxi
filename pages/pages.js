import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}