import React from 'react';
import {Button, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';



const Transaction = ({navigation}) => {
  return (
    <View style={styles.maine}>

      <View style={mystyles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={mystyles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
      </View>

      <View style={styles.cont}>
        <View style={styles.container} >
          <View style={styles.taxiname}>
            <Text style={styles.taxiText}>Active Taxi Name</Text>
          </View>
          <TouchableOpacity
            style={styles.taximg}
            onPress={() => navigation.navigate('VehiculesList')}
            >
            <Image
              source={require('../../../../assets/images.jpeg')}
              style={styles.backgroundImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      
      

      <TouchableOpacity
        style={styles.destt}
        onPress={() => navigation.navigate('#')}>
        <Text style={styles.destext}>Ma Destination</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.transAct}
        onPress={() => navigation.navigate('#')}>
        <Icon name="bitcoin" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.clients}
        onPress={() => navigation.navigate('ClientsList')}>
        <Icon name="users" size={20} color="white" />
      </TouchableOpacity>
    </View>

    // <SafeAreaView>
    //  </SafeAreaView>
  );
};
const mystyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
  },
});

export default Transaction;
