import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';
import styles from './style';
import { Avatar } from 'react-native-paper';

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
      imatriculation: email,
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
        <ScrollView>
        <Text style = {styles.Title}>
            Add Taxi !!
          </Text>
          <View style = {styles.logo}>
                    <Avatar.Image 
                        
                        size={150} 
                        source={require ('../../../../assets/Taxi.jpg')} 
                    />
                </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Imatriculation"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({name: text})}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Couleur"
            keyboardType ='phone-pad'
            numberOfLines={1}
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
        </ScrollView>
      </View>
    );
  }
}

export default ClientForm;
