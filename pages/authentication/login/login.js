import React from 'react';
import { Button,Text, View , TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style'


 
class LoginPage extends React.Component{
    
  state={
      email:"",
      password:""
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
                  auth().signInWithEmailAndPassword(this.state.email,this.state.password)
                  .then(function(user){
                    alert(user)
                  })
              }
          }
      }
      catch(error){
        console.log(error.toString)
          alert(error.value)
      }
  }

    render(){
    return (
      
      <View style={styles.container}>
        <ScrollView>

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
            keyboardType = "email-address"
            numberOfLines={1} 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password"
            numberOfLines={1}
            secureTextEntry = {true}
            placeholderTextColor="#003f5c"
            onChangeText={password => this.setState({password:password})}/>
        </View>

        <TouchableOpacity style={styles.forgot}
          onPress = {() => this.props.navigation.navigate('resetPass')}
        >
          <Text style={styles.forgotText} >Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress = {() => this.props.navigation.navigate("navPages")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Button
          title = "Back to main"
          onPress = {() => this.props.navigation.navigate("navPages")}
        />

        </ScrollView>
      </View>
      
    ); 
    }
}




export default LoginPage;