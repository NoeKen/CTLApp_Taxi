import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import VehiclesList from '../task/vehiculesList/vehicules_list';
import Transaction from '../task/transactions/transactions';
import ClientsList from './clientsList/clients_list';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialBottomTabNavigator();

const TasksPage = () => {
  const Tab = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="VehiclesList" component={VehiclesList} />
        <Tab.Screen name="Transaction" component={Transaction} />
        <Tab.Screen name="ClientsList" component={ClientsList} />
      </Tab.Navigator>
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  }

  return (
    MyTabs()
  )
}
export default TasksPage;