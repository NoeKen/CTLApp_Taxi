import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
    },
    nameApp : {
        color : '#FF237B',
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
        backgroundColor : '#FF237B',
        width:"80%",
        borderRadius:40,
        height:75,
        alignItems:"center",
        justifyContent:"center",
        margin : 20,
        marginTop: 40,
    },
    buttonsRegister:{
        backgroundColor : '#4E23FF',
        width:"80%",
        borderRadius:40,
        height:75,
        alignItems:"center",
        justifyContent:"center",

    }
})

export default styles;