import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import styles from './style.js';

const ClientsList = ({navigation}) => {
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
    </View>
  );
};

export default ClientsList;