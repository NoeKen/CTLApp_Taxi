import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
  
    container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal : 20,
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"100%",
    backgroundColor:"#FFE4E1",
    borderRadius:10,
    height:65,
    marginBottom:20,
    justifyContent:"center",
  },
  inputText:{
    paddingHorizontal : 20,
    color:"black",
    fontSize : 20,
  },
  forgot:{
    color:"#fd6c9e",
    alignItems : 'flex-end',
    
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
export default styles;