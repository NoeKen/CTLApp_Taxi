import React from 'react';
import {StatusBar, Text, StyleSheet, horizontal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksPage from './pages/task/tasks';
import DashboardPage from './pages/main/dashboard/dashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
//import ProfilePage from './pages/profile/profile_page';
import Profile from './pages/main/profiles/profile/profile';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);



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
                icon = <Icon name="home" size={20} color= {color} />
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
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;