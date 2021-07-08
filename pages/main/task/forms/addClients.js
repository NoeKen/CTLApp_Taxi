import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class ClientForm extends React.Component {
  state = {
    email: '',
    names: '',
    number: '',
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            keyboardType ='email-address'
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email: text})}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Nom et Prenom"
            placeholderTextColor="#003f5c"
            onChangeText={name => this.setState({names: name})}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Telephone"
            keyboardType ='phone-pad'
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
            // () => this.email.setState(''),
            // () => this.names.setState(''),
            // () => this.number.setState('')
          }
        />
        <Button
          title="Cancel" color = 'red'
          onPress={() => 
            this.props.navigation.navigate('ClientsList')
          }/>
      </View>
    );
  }
}

export default ClientForm;
