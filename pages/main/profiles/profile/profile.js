import React from 'react';
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