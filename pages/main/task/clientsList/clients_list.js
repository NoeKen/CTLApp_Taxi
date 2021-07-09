import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import styles from './style.js';
import Icon from 'react-native-vector-icons/FontAwesome';

import database from '@react-native-firebase/database';


const ClientsList = ({navigation}) => {
 /* export async function getClients (){
    var ClientsL = []
    var snapshot = await database()
    .ref('clients')
    .get()
    snapshot.forEach((client) => {
      ClientsL.push(client.data());
    });
  }*/
  return (
    <View style={styles.maine}>
      <Text style={styles.titre} >Mes Clients</Text>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../../../assets/images.jpeg')}
            style={styles.backgroundImage}
          />
        </View>

        <View style={styles.nameText}>
          <Text style={styles.nameText}>Jo Owaldski</Text>
          <Text style={styles.numText}>695233625</Text>
        </View>
      </View>

      <TouchableOpacity
          style={styles.transAct}
          onPress={() => navigation.navigate('ClientForm')}>
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
    </View>
  );
};

export default ClientsList;