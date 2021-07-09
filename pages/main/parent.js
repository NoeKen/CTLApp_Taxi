import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../authentication/login/login";
import SignupPage from "../authentication/registration/signUp/signup";
import NavPages from "../pages";
import Transaction from "./task/transactions/transactions";
import VehiclesList from "./task/vehiculesList/vehicules_list";
import ClientsList from "./task/clientsList/clients_list";
import Welcome from "../authentication/welcome/welcomepage";
import SetProfile from "../authentication/registration/setProfile/setProfile";
import emailVerification from "../authentication/emailVerification/verifyYourMails";
import resetPass from "../authentication/resetPassword/resetpass";
import ClientForm from "./task/forms/addClients"
import VehiculeForm from "./task/forms/addVehicules";
import Destination from "./task/forms/destination";
//import TabBarTop from "@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar";

const Stack = createStackNavigator();

export default function Parent() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={SignupPage} />
      <Stack.Screen name="navPages" component={NavPages} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="VehiculesList" component={VehiclesList} />
      <Stack.Screen name="ClientsList" component={ClientsList} />
      <Stack.Screen name="SetProfile" component={SetProfile}/>
      <Stack.Screen name="emailVerification" component={emailVerification}/>
      <Stack.Screen name="resetPass" component={resetPass}/>
      <Stack.Screen name="ClientForm" component={ClientForm}/>
      <Stack.Screen name="VehiculeForm" component={VehiculeForm}/>
      <Stack.Screen name="Destination" component={Destination}/>
    </Stack.Navigator>
  );
}