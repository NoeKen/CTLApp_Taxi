import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../authentication/login/login";
import SignupPage from "../authentication/registration/signup";
import navPages from "../pages";
import Transaction from "./task/transactions/transactions";
import VehiclesList from "./task/vehiculesList/vehicules_list";
import ClientsList from "./task/clientsList/clients_list";
//import TabBarTop from "@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar";

const Stack = createStackNavigator();

export default function Parent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={SignupPage} />
      <Stack.Screen name="navPages" component={navPages} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="VehiculesList" component={VehiclesList} />
      <Stack.Screen name="ClientsList" component={ClientsList} />
    </Stack.Navigator>
  );
}