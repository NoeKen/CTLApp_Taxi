import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignContent : 'center',
        padding:20,
      },
      
    Title : {
        color : '#FF237B',
        fontSize : 30,
        fontWeight : 'bold',
        alignItems : 'center',
        marginBottom : 30,
        marginTop : 10,
        textAlign : 'center'
      },
      subTitle : {
        marginBottom: 40,
        fontSize : 20,
        color : 'black',
        fontFamily : 'arial',
        fontWeight : 'bold',
      },
      inputView:{
        width:"100%",
        backgroundColor:"#FFE4E1",
        borderRadius:10,
        height:65,
        marginBottom:20,
      },
      inputText:{
        paddingHorizontal : 20,
        color:"black",
        fontSize : 20,
      },
      resetBtn:{
        width:"100%",
        backgroundColor: 'rgb(250,30,120)',
        borderColor :'black',
        borderStyle : 'solid',
        borderWidth : 1,
        borderRadius:40,
        height:75,
        justifyContent:"center",
        alignItems : 'center',
        marginTop:50,
        marginBottom:10
      },
      registerText:{
        color : 'white',
        fontSize : 30,
        fontWeight :'bold',
      },
})

export default styles