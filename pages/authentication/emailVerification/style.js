import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent : 'center',
        padding:20,
        flex:1
      },
    Title : {
        color : '#FF237B',
        fontSize : 40,
        fontWeight : 'bold',
        alignItems : 'center',
        marginBottom : 30,
        marginTop : 50,
        textAlign : 'center'
    },
    subTitle : {
        marginBottom: 40,
        fontSize : 25,
        color : 'black',
        textAlign : 'center',
        fontFamily : 'arial',
        fontWeight : 'bold',
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
})

export default styles;