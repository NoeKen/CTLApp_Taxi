import React from 'react';
import {Text, View , TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

 class resetPass extends React.Component{
 
    state={
      email:"",
    }
    
    render(){
        return (
        
            <View style={styles.container}>
               
                 <TouchableOpacity >
                    <Text style ={styles.Title}>Reset Password</Text>
                </TouchableOpacity>

                 <TouchableOpacity >
                    <Text style ={styles.subTitle}>Enter your email to reset your password</Text>
                </TouchableOpacity>

                <View style={styles.inputView} >
                    
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email" 
                        numberOfLines={1}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}
                    />

                    <TouchableOpacity 
                        style={styles.resetBtn}
                        onPress ={() => this.props.navigation.navigate('Login')}
                        >
                        <Text style={styles.registerText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ); 
        }
    }


export default resetPass;