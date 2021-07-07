import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style'


 
 const emailVerification = ({navigation}) =>{
    
    return (
      
      <View style={styles.container}>
        <View >
          <Text style = {styles.Title}>
            Email verification
          </Text>
          <Text style = {styles.subTitle}>
           Verifie your mails to validate your inscription 
          </Text>
          <TouchableOpacity 
                style={styles.registerBtn}
                onPress ={() => navigation.navigate('navPages')}
            >
                <Text style={styles.registerText}>Return</Text>
            </TouchableOpacity>
        </View>
       
      </View>
    ); 
    
}




export default emailVerification;