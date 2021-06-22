import React from 'react';
import {StatusBar, Text, StyleSheet, horizontal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from './pages/profile';
import TasksPage from './pages/tasks';
import DashboardPage from './pages/dashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { size } from 'lodash';
const App = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let icon;
              // Set different 'icons' for each route
              if (route.name === 'Dashboard') {
                icon = <Icon name="gauge-simple" size={20} color= {color} />
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
            activeBackgroundColor: 'grey',
            activeTintColor: 'blue',
            inactiveTintColor: 'grey',
          }}>
          <Tab.Screen name="Dashboard" component={DashboardPage} />
          <Tab.Screen name="Tasks" component={TasksPage} />
          <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;