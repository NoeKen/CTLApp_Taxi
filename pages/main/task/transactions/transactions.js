import React from 'react';
import {Button, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet} from 'react-native';



const Transaction = ({route, navigation}) => {

  // const [rest, setRest] = React.useState(null)
  // const [aname, setAname] = React.useState('')
  // const [fromLoca, setFromloca] = React.useState(null)
  // const [toLoca, setToloca] = React.useState(null)
  // const [ region, setRegion] = React.useState(null)

  // React.useEffect( () => {
  //   let {rest, curLoc} = route.params;

  //   let fromLoc = curLoc.gps
  //   let toLoc = rest.location
  //   let street = curLoc.aname

  //   let mapRegion = {
  //     latitude: (fromLoc.latitude + toLoc.latitude)/2,
  //     longitude: (fromLoc.longitude + toLoc.longitude)/2,
  //     latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) *2,
  //     longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude)*2
  //   }
  // }, [])

  return (
    <View style={styles.maine}>
      

      <View style={mystyles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          showsUserLocation = {true}
          showsMyLocationButton={true}
          style={mystyles.map}
          enablePoweredByContainer={false}
          region={{
            latitude: 3.8576213,
            longitude: 11.5007653,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          ></MapView>
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
        onPress={() => navigation.navigate('Destination')}>
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
