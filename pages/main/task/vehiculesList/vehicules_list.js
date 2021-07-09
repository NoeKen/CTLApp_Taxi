import React from 'react';
import { Text, View ,Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class VehiclesList extends React.Component {

  render (){
    return (
      <View style={styles.maine}>
        <Text style={styles.titre}>Mes Vehicules</Text>
        <View style={styles.container}>
          <View>
            <Image
              source={require('../../../../assets/images.jpeg')}
              style={styles.backgroundImage}
            />
          </View>

          <View style={styles.nameText}>
            <Text style={styles.nameMat}>CE 400 PJ</Text>
            <Text style={styles.numCol}>Vert Orange</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.transAct}
          onPress={() => this.props.navigation.navigate('VehiculeForm')}>
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    );
  }  
};

export default VehiclesList;