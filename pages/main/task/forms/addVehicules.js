import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class VehiculeForm extends React.Component {
  state = {
    email: '',
    matricule: '',
    color: '',
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.photocon}>
          <View style={styles.photo}>
            <Text>Something</Text>
          </View>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Matricule"
            placeholderTextColor="#003f5c"
            onChangeText={name => this.setState({names: name})}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Couleur"
            numberOfLines={1}
            placeholderTextColor="#003f5c"
            onChangeText={tel => this.setState({number: tel})}
          />
        </View>

        <Button
          title="Lets log"
          onPress={() => 
            alert(
              this.state.email +
                ' ,' +
                this.state.names +
                ' ,' +
                this.state.number
            )
 
          }
        />
        <Button
          title="Cancel" color = 'red'
          onPress={() => 
            this.props.navigation.navigate('VehiculesList')
          }/>
      </View>
    );
  }
}

export default VehiculeForm;