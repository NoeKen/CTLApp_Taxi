import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
    },
    nameApp : {
        color : 'rgb(250,30,120)',
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
        backgroundColor : 'rgb(250,30,120)',
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