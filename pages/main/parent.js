import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../authentication/login/login";
import SignupPage from "../authentication/registration/signup";
//import TabBarTop from "@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar";

const Stack = createStackNavigator();

export default function Parent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={SignupPage} />
    </Stack.Navigator>
  );
}