import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import VehiclesList from '../task/vehiculesList/vehicules_list';
import Transaction from '../task/transactions/transactions';
import ClientsList from './clientsList/clients_list';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Stack = createStackNavigator();

const TasksPage = () => {
  const Tab = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
       <Stack.Navigator>
      <Stack.Screen name="Login" component={Transaction} />
      <Stack.Screen name="Signup" component={VehiclesList} />
      <Stack.Screen name="navPages" component={ClientsList} />
    </Stack.Navigator>
     /* <Tab.Navigator>
        <Tab.Screen name="VehiclesList" component={VehiclesList} />
        <Tab.Screen name="Transaction" component={Transaction} />
        <Tab.Screen name="ClientsList" component={ClientsList} />
      </Tab.Navigator>*/
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  }

  return (
    MyTabs()
  )
}
export default TasksPage;