import React from 'react';
import {View, Text,TouchableOpacity,SafeAreaView, Image } from "react-native";
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar} from 'react-native-paper';

const Profile = ({navigation}) => {
  return (
    <View style={styles.maine}>
      <View style={styles.titre}>
        <Text style={styles.titreTesxt}>Profile</Text>
      </View>
      <View style={styles.camCon}>
        <View style={styles.cam1}>
          <Avatar.Image
            size={80}
            source={require('../../../../assets/Taxi.jpg')}
          />
        </View>
        <View style={styles.cam}>
          <Text style={styles.camText}>Name : Jo OWaldski</Text>
          <Text style={styles.camText}>Email : mail@gmail.com </Text>
          <Text style={styles.camText}>Tel : 699759003 </Text>
        </View>
      </View>

      <View style={styles.starCon}>
        
      </View>

      <TouchableOpacity
        style={styles.buttonsRegister}
        onPress={() => navigation.navigate('#')}>
        <Text style={styles.textLogin}>Parameters</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonsRegister}
        onPress={() => navigation.navigate('#')}>
        <Text style={styles.textLogin}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
