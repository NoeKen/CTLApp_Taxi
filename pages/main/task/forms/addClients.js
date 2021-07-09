import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './style';

import database from '@react-native-firebase/database';

class ClientForm extends React.Component {
  state = {
    email: '',
    name: '',
    number: '',
  };
  addClient(email,name,phone){

    database().ref("clients")
    .push({
      email: email,
      name : name,
      phone :phone
    })
  /*
    firestore().collection('Clients')
    .add({
        uid : this.state.user,
        name : name,
        phone : phone,
        image :this.state.image,
        email :auth().currentUser.email
    })*/
}

  render() {
    return (
      <View style={styles.container}>

        <Text style = {styles.Title}>
            Add Client !!
          </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            keyboardType ='email-address'
            placeholderTextColor="#003f5c"
            onChangeText={email => this.setState({email: email})}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Nom et Prenom"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({name: text})}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Telephone"
            keyboardType ='phone-pad'
            numberOfLines={1}
            keyboardType = 'phone-pad'
            placeholderTextColor="#003f5c"
            onChangeText={tel => this.setState({number: tel})}
          />
        </View>

        <TouchableOpacity
        style = {styles.buttonsLogin}
        onPress={
          () => this.addClient(this.state.email,this.state.name,this.state.number)
        }
        >
          <Text style={styles.textLogin}>Lets go</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.buttonsRegister}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.textLogin}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ClientForm;
