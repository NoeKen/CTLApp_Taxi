import React from "react";
import {View, Text,TouchableOpacity,SafeAreaView, Image } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "../welcome/style";



const Welcome = ({navigation}) =>{
    
    return(
        <SafeAreaView >
            <View style = {styles.container}>
                <Text style = { styles.nameApp}>CTLTaxi App</Text>
                <Avatar.Image 
                    size={180} 
                    source={require ('../../../assets/Taxi.jpg')} 
                />
                <TouchableOpacity
                style = {styles.buttonsLogin}
                    onPress = {() => navigation.navigate('Login')}
                >
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.buttonsRegister}
                    onPress = {() => navigation.navigate('Signup')}
                >
                    <Text style={styles.textLogin}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Welcome;