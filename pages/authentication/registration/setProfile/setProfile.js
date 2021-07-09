import React from 'react';
import {Text, View , TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from '../setProfile/style';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

 class SetProfile extends React.Component{
 
    constructor(){
        super();
      }

      state={
        user : auth().currentUser.uid ,
        name:"",
        phone:"",
        image :""
      };
      addUser(name,phone){
          firestore().collection('Users')
          .add({
              uid : this.state.user,
              name : name,
              phone : phone,
              image :this.state.image,
              email :auth().currentUser.email
          })
      }

    render(){
        return (
        
            <View style={styles.container}>
               <ScrollView>
                 <TouchableOpacity >
                    <Text style ={styles.Title}>Configure your account</Text>
                </TouchableOpacity>



                <View style = {styles.logo}>
                    <Avatar.Image 
                        
                        size={180} 
                        source={require ('../../../../assets/Taxi.jpg')} 
                    />
                </View>
                <View style={styles.inputView} >
                    
                    <TextInput  
                        style={styles.inputText}
                        placeholder="name" 
                        numberOfLines={1}
                        keyboardType = "text"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({name:text})}
                    />
                
                </View>

                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="number" 
                        numberOfLines={1}
                        keyboardType = "numeric"
                        placeholderTextColor="#003f5c"
                        onChangeText={numero => this.setState({phone:numero})}
                    />
                </View>


                <TouchableOpacity 
                    style={styles.selectBtn}
                    >
                    <Text style={styles.selectText}>choose a picture</Text>
                </TouchableOpacity>
 
                <TouchableOpacity 
                    style={styles.registerBtn}
                    onPress ={() => this.addUser(this.state.name,this.state.phone)}
                    >
                    <Text style={styles.registerText}>SAVE</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        ); 
        }
    }




export default SetProfile;