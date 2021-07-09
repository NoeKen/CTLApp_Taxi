import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignContent : 'center'
  },
  Title : {
    color : 'rgb(250,30,120)',
    fontSize : 40,
    fontWeight : 'bold',
    alignItems : 'center',
    marginBottom : 50,
    textAlign : 'center'
  },
  inputView:{
    width:"100%",
    // backgroundColor:"#FFE4E1",
    backgroundColor: 'rgba(255, 234, 242, 1)',
    borderRadius:10,
    height:65,
    marginBottom:20,
    justifyContent:"center",
  },
  inputText: {
    paddingHorizontal : 20,
    color:"black",
    fontSize : 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal : 20,
  },
  photo: {
    marginHorizontal: 'auto', 
    width:150,
    backgroundColor: 'rgba(255, 234, 242, 1)',
    borderRadius:80,
    height:150,
    marginBottom:5,
    justifyContent:"center",
  },
  buttonsLogin:{
    backgroundColor : 'rgb(250,30,120)',
    width:"100%",
    borderRadius:40,
    height:70,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,
},
buttonsRegister:{
  backgroundColor : '#4E23FF',
  width:"100%",
  borderRadius:40,
  height:70,
  marginVertical:20,
  alignItems:"center",
  justifyContent:"center",

},
textLogin :  {
  color : 'white',
  fontWeight : 'bold',
  fontSize : 25,
},

  //contenaire de la photo
  photocon : {
    alignItems: 'center',
    padding: 5
  }

});

export default styles;