import React from 'react';
import {Text, View , TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './style';

import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';

 class SignupPage extends React.Component{
 
    constructor(){
        super();
        this.dbRef = firebase.firestore().collection('users')
        this.state={
          email:"",
          password:"",
          isLoading : false
        };
      }
      
    signup(email,password){
        try{
            if((this.state.email =="" && this.state.password =="") ||(this.state.email=="") || (this.state.password=="") ){
                alert('Values does not be empty')
            }
            else {
                if(this.state.password.length < 8){
                alert('Enter at least height caracters');
                }else{
                    auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
                    this.props.navigation.navigate('SetProfile')
                }
            }
        }
        catch(error){
            
        }
    }

    render(){
        return (
        
            <View style={styles.container}> 
               <ScrollView>
                 <TouchableOpacity >
                    <Text style ={styles.Title}>Stop missing !</Text>
                </TouchableOpacity>

                 <TouchableOpacity >
                    <Text style ={styles.subTitle}>Not yet a member ? create an account {'\n'}right away</Text>
                </TouchableOpacity>

                <View style={styles.inputView} >
                    
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email" 
                        numberOfLines={1}
                        keyboardType = "email-address"
                        /* value = "somme thing" (to dispaly it in the input */
                        placeholderTextColor="#003f5c"
                        onChangeText={email => this.setState({email:email})}
                    />
                
                </View>

                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Password"
                        numberOfLines={1}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}
                    />
                </View>

                <TouchableOpacity style ={styles.clientView}>
                    <Text style={styles.client}>Already have a client account ?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.registerBtn}
                    onPress = {
                        ()=> console.log(this.state.email,this.state.password),
                        ()=> this.signup(this.state.email,this.state.password)
                    }
                    >
                    <Text style={styles.registerText}>Create Account</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        ); 
        }
    }




export default SignupPage;