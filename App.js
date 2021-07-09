import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Parent from './pages/main/parent';

navigator.geolocation = require('@react-native-community/geolocation')

export default function Navigation() {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'CTLTaxi App Camera Permission',
          message:
            'CTLTaxi App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => { }, []);
      if (Platform.OS === 'android'){
        androidPermission();
      }else {
        Geolocation.requestAuthorization();
      }
  return (
    <NavigationContainer>
      <Parent />
    </NavigationContainer>
  );
}
