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
                <View style = {styles.avatar}>

                    <Avatar.Image 
                        size={150} 
                        source={this.state.photo} 
                    />

                </View>

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

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Sign U</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={styles.signupText}>Signup</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={styles.signupText}>Already have a client account ?</Text>
                </TouchableOpacity>
            
            </View>
        ); 
        }
    }




export default SignupPage;