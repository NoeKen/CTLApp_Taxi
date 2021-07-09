StyleSheet 
import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
  
    maine: {
        height: '100%',
        width: '100%',
    backgroundColor: 'white',
    padding: 10,
    // backgroundColor: 'rgba(250,30,120,0.2)',
  },
  titre: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 280,
    padding: 5,
    minHeight: 50,
    marginBottom: 0
  },
  titreTesxt:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF237B',
    borderBottomWidth: 2,
    width: '70%',
    textAlign: 'center',
    justifyContent: 'center'


  },
  camCon: {
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 280,
      padding: 5,
      marginBottom: 0


  },
  cam: {
    minHeight: 180,
    minWidth: 120,
    backgroundColor: '#FF237B',
    borderRadius: 50,

  },
  cam1: {
    minHeight: 150,
    minWidth: 120,
    backgroundColor: 'grey',
    
  },
  starCon: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 280,
    padding: 5,
    minHeight: 50,
    marginBottom: 0,
    alignItems: 'center'
},
star: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#FF237B',

},
transCon: {
  margin: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    width: 280,
    backgroundColor: '#FF237B',
    minHeight: 150,
    marginBottom: 0
},
trans: {
  width: '50%',
  borderRightWidth: 2,
  borderRightColor: 'black',
  alignItems: 'center',
  justifyContent: 'center'


},
trans1: {
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center'
},

eff: {
  fontWeight: 'bold',
  color: 'white',
  fontSize: 18,
  marginTop: 15
},
val: {
  fontWeight: 'bold',
  color: 'white',
  fontSize: 18,

}

});
export default styles;