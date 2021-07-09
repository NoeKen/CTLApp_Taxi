import React from 'react';
<<<<<<< HEAD
import {
  Text,
  View,
  Image
} from 'react-native';
import{StyleSheet}from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Facebookprofile extends React.Component{
  static navigationOption = {
    headerShown: false,
  };
  render(){
    return( 
      <View style={styles.container}>
      
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 200}} />
       <View style={styles.topheader}>
      <Icon name="home" size={30} color= 'white'  />
      <Icon name="user" size={30} color= 'white' />
      <Icon name="bell" size={30} color= 'white' />
      <Icon name="dots-three-horizontal" size={30} color= 'white' />
      </View>
      <View style={styles.dpcontainer}>
      <View style={styles.dpBlutRound}>
      <Image
      styles={styles.dp}
      source={{uri: 'https://reactjs.org/logo-og.png'}}
        />

        </View>

      </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create ({
container: {
  flex:1,
 backgroundColor:'white',
},
topheader:{
  height:50,
  backgroundColor:'black',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-around',
  opacity:0.8,
  position: 'absolute',
  width: '100%'
},
dpcontainer:{
  width: 200,
  height:200,
  backgroundColor:'#0000FF',
  borderRadius: 200,
  alignSelf:'center', 
  position: 'absolute',
  marginTop:120,
  justifyContent:'center',
  alignItems:'center',
},
dpBlutRound:{
  width:'98%',
  backgroundColor:'white',
  height:'95%',
 borderRadius: 200,
 borderEndWidth:5,
 borderColor:'#0000FF',
},
dp:{
  width:'98%',
  height:'95%',
},

}
); 
=======
import {View, Text,TouchableOpacity,SafeAreaView, Image } from "react-native";
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar} from 'react-native-paper';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const Profile = ({navigation}) => {


  return (
    <View style={styles.maine}>
      <View style={styles.titre}>
        <Text style={styles.titreTesxt}>Profile</Text>
      </View>
      <View style={styles.camCon}>
        <View style={styles.cam1}>
          <Avatar.Image
            size={80}
            source={require('../../../../assets/Taxi.jpg')}
          />
        </View>
        <View style={styles.cam}>
          <Text style={styles.camText}>Name : Jo OWaldski</Text>
          <Text style={styles.camText}>Email : mail@gmail.com </Text>
          <Text style={styles.camText}>Tel : 699759003 </Text>
        </View>
      </View>

      <View style={styles.starCon}>
        
      </View>

      <TouchableOpacity
        style={styles.buttonsRegister}
        onPress={() => navigation.navigate('#')}>
        <Text style={styles.textLogin}>Parameters</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonsRegister}
        onPress={() => navigation.navigate('#')}>
        <Text style={styles.textLogin}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
>>>>>>> 0d3a39600c703c12605e2b8d6b4c45788529aab0
