import React from 'react';
import {Text, View , TextInput, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from '../setProfile/style';

 class SetProfile extends React.Component{
 
    state={
      name:"",
      number:"",
      photo : "../../../../assets/images.jpeg",
    }
    
    render(){
        return (
        
            <View style={styles.container}>
               
                 <TouchableOpacity >
                    <Text style ={styles.Title}>Configure your account</Text>
                </TouchableOpacity>

                 <TouchableOpacity >
                    <Text style ={styles.subTitle}>Set up your profile</Text>
                </TouchableOpacity>

                <View style = {styles.logo}>
                    <Avatar.Image 
                        
                        size={180} 
                        source={require ('../../../../assets/Taxi.jpg')} 
                    />
                </View>
                <View style={styles.inputView} >
                    
                    <TextInput  
                        style={styles.inputText}
                        placeholder="name" 
                        numberOfLines={1}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}
                    />
                
                </View>

                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="number" 
                        numberOfLines={1}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}
                    />
                </View>


                <TouchableOpacity 
                    style={styles.selectBtn}
                    >
                    <Text style={styles.selectText}>choose a picture</Text>
                </TouchableOpacity>
 
                <TouchableOpacity 
                    style={styles.registerBtn}
                    onPress ={() => this.props.navigation.navigate('emailVerification')}
                    >
                    <Text style={styles.registerText}>Create Account</Text>
                </TouchableOpacity>
            
            </View>
        ); 
        }
    }




export default SetProfile;