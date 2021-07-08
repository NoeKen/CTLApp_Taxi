import React from 'react';
import {Button, Text, View,Image,TouchableOpacity } from 'react-native';
import styles from './style.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const Transaction = ({navigation}) => {
  return (
    <View style={styles.maine}>
      <View style={styles.container}>
        <View style={styles.taxiname}>
          <Text style={styles.taxiText}>Active Taxi Name</Text>
        </View>
        <TouchableOpacity
          style={styles.taximg}
          onPress={() => navigation.navigate('VehiculesList')}>
          <Image
            source={require('../../../../assets/images.jpeg')}
            style={styles.backgroundImage}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.destt}
        onPress={() => navigation.navigate('#')}>
        <Text>Ma Destination</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.transAct}
        onPress={() => navigation.navigate('#')}>
        <Icon name="home" size={20} color={{color: 'white'}} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.clients}
        onPress={() => navigation.navigate('ClientsList')}>
        <Icon name="home" size={20} color={{color: 'white'}} />
      </TouchableOpacity>

    </View>

    // <SafeAreaView>
    //  </SafeAreaView>
  );
};

export default Transaction;