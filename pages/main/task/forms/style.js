import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

  //contenaire de la photo
  photocon : {
    alignItems: 'center',
    padding: 5
  }

});

export default styles;