import React from 'react';
import { Button,Text, View , TextInput, TouchableOpacity} from 'react-native';
import styles from './style'


 
 const LoginPage = ({navigation}) =>{
    
  state={
      email:"",
      password:""
    }
    
    return (
      
      <View style={styles.container}>
        <View >
          <Text style = {styles.Title}>
            WELCOME TO YOU !
          </Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText}
            onPress = {() => navigation.navigate("Signup")}
          >Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress = {() => navigation.navigate("navPages")}>
          <Text style={styles.loginText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    ); 
    
}




export default LoginPage;