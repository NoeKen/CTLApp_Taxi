import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent : 'center',
        padding:20,
        flex:1
      },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom: 30,
        alignItems : 'center',
        
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
  Title : {
    color : '#FF237B',
    fontSize : 30,
    fontWeight : 'bold',
    alignItems : 'center',
    marginBottom : 50,
    textAlign : 'center'
  },
  subTitle : {
    marginBottom: 20,
    fontSize : 20,
    color : 'black',
    fontFamily : 'arial',
    fontWeight : 'bold',
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
  selectBtn :{
    width:"100%",
    backgroundColor: 'rgb(50,170,260)',
    borderColor :'black',
    borderStyle : 'solid',
    borderWidth : 1,
    borderRadius:15,
    height:45,
    justifyContent:"center",
    alignItems : 'center',
  },
  selectText:{
    color : 'white',
    fontSize : 18,
    fontFamily : 'arial'
  },
  registerBtn:{
    width:"100%",
    backgroundColor: 'rgb(250,30,120)',
    borderColor :'black',
    borderStyle : 'solid',
    borderWidth : 1,
    borderRadius:40,
    height:75,
    justifyContent:"center",
    alignItems : 'center',
    marginTop:10,
    marginBottom:10
  },
  registerText:{
    color : 'white',
    fontSize : 30,
    fontWeight :'bold',
  },
  signupText :{
    color : 'black',
  }
})

export default styles;