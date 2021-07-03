import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
/*import VehiclesList from '../task/vehiculesList/vehicules_list';
import Transaction from '../task/transactions/transactions';*/
import ClientsList from './clientsList/clients_list';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginPage from '../../authentication/login/login';
import SignupPage from '../../authentication/registration/signup';


const Tab = createMaterialBottomTabNavigator();

const TasksPage = () => {
  const Tab = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="VehiclesList" component={LoginPage} />
        <Tab.Screen name="Transaction" component={SignupPage} />
        <Tab.Screen name="ClientsList" component={ClientsList} />
      </Tab.Navigator>
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  }

  return (
    MyTabs()
  )
}
export default TasksPage;