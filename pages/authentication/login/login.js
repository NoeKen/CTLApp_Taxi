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
            Hey, welcome
          </Text>
          <Text style = {styles.SubTitle}>
           Ride on to your next trip, {'\n'}
           Right away !
          </Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email"
            numberOfLines={1} 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password"
            numberOfLines={1}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>

        <TouchableOpacity style={styles.forgot}
          onPress = {()=> navigation.navigate('resetPass')}
        >
          <Text style={styles.forgotText} >Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} 
          onPress = {() => navigation.navigate("navPages")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn} onPress = {() => navigation.navigate.goBack()}>
          <Text style={styles.loginText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    ); 
    
}




export default LoginPage;