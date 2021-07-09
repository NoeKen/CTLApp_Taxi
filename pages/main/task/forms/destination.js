import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Destination extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.Title}>
            Hey, set your destination
          </Text>
        <View style={styles.inputView}>
          <Text style={styles.inputText}> Ma Position</Text>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Entrez Votre Destination"
            placeholderTextColor="#003f5c"
            onChangeText={name => this.setState({names: name})}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => alert('Pressed')}>
          <Text style={styles.loginText}>Lets go</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

export default Destination;
