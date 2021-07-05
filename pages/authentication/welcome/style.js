import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
    },
    nameApp : {
        color : '#fd6c9e',
        fontFamily : 'serif',
        margin : 50,
        fontSize : 30,
        fontWeight : 'bold',
    },
    textLogin :  {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 25,
    },
    buttonsLogin:{
        backgroundColor : '#fd6c9e',
        width:"80%",
        borderRadius:40,
        height:75,
        alignItems:"center",
        justifyContent:"center",
        margin : 20,
        marginTop: 40,
    },
    buttonsRegister:{
        backgroundColor : '#6600FF',
        width:"80%",
        borderRadius:40,
        height:75,
        alignItems:"center",
        justifyContent:"center",

    }
})

export default styles;