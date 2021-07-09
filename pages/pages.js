import React from 'react';
import {StatusBar, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from './main/profiles/profile/profile';
import DashboardPage from './main/dashboard/dashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import Transaction from './main/task/transactions/transactions';


const NavPages = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar barStyle="light-content" />
     
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let icon;
              // Set different 'icons' for each route
              if (route.name === 'Dashboard') {
                icon = <Icon name="dashboard" size={20} color= {color} />
              } else if (route.name === 'Tasks') {
                icon = <Icon name="list" size={15} color= {color} />
              } else if (route.name === 'Profile') {
                icon = <Icon name="user" size={20} color= {color} />
              }

              // You can return any component that you like here!
              return <Text style={{color: color}}>{icon}</Text>;
            },
          })}
          tabBarOptions={{
            activeBackgroundColor: '#ff237b',
            activeTintColor: 'white',
            inactiveTintColor: 'black',
          }}>
          <Tab.Screen name="Dashboard" component={DashboardPage} />
          <Tab.Screen name="Tasks" component={Transaction} />
          <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
   
    </>
  );
};

export default NavPages;