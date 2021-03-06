import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
  
    container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal : 20,
    marginTop : -20
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"100%",
    backgroundColor:"rgba(255, 234, 242, 1)",
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

    alignItems : 'flex-end',
    justifyContent : 'center',
  },
  forgotText:{
    color:"rgb(250,30,120)",
    fontSize : 25,
    fontWeight :'bold',
  },
  loginBtn:{
    width:"100%",
    backgroundColor: 'rgb(250,30,120)',
    borderColor :'black',
    borderStyle : 'solid',
    borderWidth : 1,
    borderRadius:40,
    height:75,
    justifyContent:"center",
    alignItems : 'center',
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color : 'white',
    fontSize : 30,
  },
  signupText :{
    color : 'black',
  },
  Title : {
    color : 'rgb(250,30,120)',
    fontSize : 40,
    fontWeight : 'bold',
    alignItems : 'center',
    marginBottom : 50,
    marginTop : 80,
    textAlign : 'center'
  },
  SubTitle : {
    marginBottom: 50,
    fontSize : 25,
    color : '#465881',
    fontFamily : 'arial',
    fontWeight : 'bold',
  }
});
export default styles;