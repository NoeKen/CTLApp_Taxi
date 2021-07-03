import React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';


 class LoginPage extends React.Component{
 
    state={
      email:"",
      password:""
    }
    
    render(){
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
            
          >Signup</Text>
        </TouchableOpacity>
        
      </View>
    ); 
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color : 'white',
  },
  signupText :{
    color : 'black',
  },
  Title : {
    marginBottom: 50,
    fontSize : 45,
    color : '#465881',
    fontFamily : 'arial',
    fontWeight : 'bold',
  }
});

export default LoginPage;