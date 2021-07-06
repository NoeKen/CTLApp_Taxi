import {StyleSheet} from 'react-native'

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal : 20,
    },
    Title : {
        color : 'rgb(250,30,120)',
        fontSize : 40,
        fontWeight : 'bold',
        alignItems : 'center',
        marginBottom : 50,
        marginTop : 20,
        textAlign : 'center'
    },
    subTitle : {
        marginBottom: 50,
        fontSize : 21,
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
        justifyContent:"center",
    },
    inputText:{
        paddingHorizontal : 20,
        color:"black",
        fontSize : 20,
    },
    clientView:{
        alignItems : 'flex-end',
        justifyContent : 'center',
        marginTop : 10,
    },
    client:{
        color : 'rgb(250,30,120)',
        fontSize : 20,
        fontWeight :'bold',
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
        marginTop:40,
        marginBottom:10
  },
    registerText:{
        color : 'white',
        fontSize : 30,
        fontWeight :'bold',
    },
    });

    export default styles;