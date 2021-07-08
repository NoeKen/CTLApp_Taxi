import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
  
    maine: {
        height: '100%',
        width: '100%',
    backgroundColor: 'white',
    padding: 10
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#FF237B',
    justifyContent: 'space-around',
    height: 60,
    alignItems:'center',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 6

  },
  taxiText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'

  },

  taximg: {
    height: 50,
    width: 50,
    
  },
  backgroundImage: {
    // resizeMode: 'cover',
    height: 50,
    width: 50,
    borderRadius: 15
  },

  transAct: {
      position: 'absolute',
      width: 50,
      height: 50,
      backgroundColor: 'rgb(250,30,120)',
      right: 15,
      bottom: 20,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems : 'center',
  },

  clients: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'rgb(250,30,120)',
    right: 15,
    bottom: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems : 'center',
  },
  destt :{
      backgroundColor: '#FF237B',
      height: 40,
      width: 200,
      position: 'absolute',
      bottom: 50,
      left: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20
  }


//   logo:{
//     fontWeight:"bold",
//     fontSize:50,
//     color:"#fb5b5a",
//     marginBottom:40
//   },
//   inputView:{
//     width:"100%",
//     backgroundColor:"#FFE4E1",
//     borderRadius:10,
//     height:65,
//     marginBottom:20,
//     justifyContent:"center",
//   },
//   inputText:{
//     paddingHorizontal : 20,
//     color:"black",
//     fontSize : 20,
//   },
//   forgot:{

//     alignItems : 'flex-end',
//     justifyContent : 'center',
//   },
//   forgotText:{
//     color:"rgb(250,30,120)",
//     fontSize : 25,
//     fontWeight :'bold',
//   },
//   loginBtn:{
//     width:"100%",
//     backgroundColor: 'rgb(250,30,120)',
//     borderColor :'black',
//     borderStyle : 'solid',
//     borderWidth : 1,
//     borderRadius:40,
//     height:75,
//     justifyContent:"center",
//     alignItems : 'center',
//     marginTop:40,
//     marginBottom:10
//   },
//   loginText:{
//     color : 'white',
//     fontSize : 30,
//     fontWeight :'bold',
//   },
//   signupText :{
//     color : 'black',
//   },
//   Title : {
//     color : 'rgb(250,30,120)',
//     fontSize : 40,
//     fontWeight : 'bold',
//     alignItems : 'center',
//     marginBottom : 50,
//     marginTop : 80,
//     textAlign : 'center'
//   },
//   SubTitle : {
//     marginBottom: 50,
//     fontSize : 25,
//     color : '#465881',
//     fontFamily : 'arial',
//     fontWeight : 'bold',
//   }
});
export default styles;