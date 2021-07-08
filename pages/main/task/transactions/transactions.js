import React from 'react';
import {Button, Text, View,Image,TouchableOpacity } from 'react-native';
import styles from './style.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const Transaction = ({navigation}) => {
  return (
    <View style={styles.maine}>
      <View style={styles.cont}>
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
      </View>
      

      <View style={styles.board}>
        <Text> Here is the board for the map </Text>
      </View>

      <TouchableOpacity
        style={styles.destt}
        onPress={() => navigation.navigate('#')}>
        <Text style={styles.destext}>Ma Destination</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.transAct}
        onPress={() => navigation.navigate('#')}>
        <Icon name="bitcoin" size={20} color='white'/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.clients}
        onPress={() => navigation.navigate('ClientsList')}>
        <Icon name="users" size={20} color= 'white' />
      </TouchableOpacity>

    </View>

    // <SafeAreaView>
    //  </SafeAreaView>
  );
};

export default Transaction;