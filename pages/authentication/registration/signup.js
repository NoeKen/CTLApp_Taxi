import React from 'react';
import {Text, View , TextInput, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './style';

 class SignupPage extends React.Component{
 
    state={
      email:"",
      password:"",
      photo : "../assets/images.jpeg",
    }
    
    render(){
        return (
        
            <View style={styles.container}>
               
                 <TouchableOpacity >
                    <Text style ={styles.Title}>Stop missing !</Text>
                </TouchableOpacity>

                 <TouchableOpacity >
                    <Text style ={styles.subTitle}>Not yet a member ? create an account {'\n'}right away</Text>
                </TouchableOpacity>

                <View style={styles.inputView} >
                    
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}
                    />
                
                </View>

                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}
                    />
                </View>

                <TouchableOpacity style ={styles.clientView}>
                    <Text style={styles.client}>Already have a client account ?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerBtn}>
                    <Text style={styles.registerText}>Create Account</Text>
                </TouchableOpacity>
            
            </View>
        ); 
        }
    }




export default SignupPage;