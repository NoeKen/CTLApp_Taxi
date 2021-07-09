import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardPage = () => {
  return (
    <View style={styles.maine}>
      <View style={styles.titre}>
        <Text style={styles.titreTesxt}>Dashboard</Text>
      </View>
      <View style={styles.camCon}>
        <View style={styles.cam}></View>
        <View style={styles.cam}></View>
      </View>

      <View style={styles.starCon}>
        <Text style={styles.star}>Stars : </Text>
        <Icon name="star" size={30} color="#FF237B" />
        <Icon name="star" size={30} color="#FF237B" />
        <Icon name="star" size={30} color="#FF237B" />
        <Icon name="star" size={30} color="#FF237B" />
      </View>

      <View style={styles.transCon}>
        <View style={styles.trans}>
          <Text style={styles.val}>24</Text>
          <Text style={styles.eff}>Course Effectuer</Text>
        </View>
        <View style={styles.trans1}>
          <Text style={styles.val}>14</Text>
          <Text style={styles.eff}>Depot Effectuer</Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardPage;
