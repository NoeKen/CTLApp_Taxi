import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
  
    maine: {
        height: '100%',
        width: '100%',
    backgroundColor: 'white',
    padding: 10,
    backgroundColor: 'magenta',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#FF237B',
    justifyContent: 'space-around',
    height: 60,
    alignItems:'center',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 6,

  },

  taxiText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'

  },

  taximg: {
    height: 50,
    width: 50,
    
  },
  backgroundImage: {
    // resizeMode: 'cover',
    height: 50,
    width: 50,
    borderRadius: 15
  },

  transAct: {
      position: 'absolute',
      width: 50,
      height: 50,
      backgroundColor: 'rgb(250,30,120)',
      right: 15,
      bottom: 20,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems : 'center',
  },

  clients: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'rgb(250,30,120)',
    right: 15,
    bottom: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems : 'center',
  },
  destt :{
      backgroundColor: '#FF237B',
      height: 40,
      width: 200,
      position: 'absolute',
      bottom: 50,
      left: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20
  },
  destext: {
    color: 'white',
  },

  //styles for the mp board
  board: {
    // backgroundColor: 'magenta',
    flex: 1
  }

});
export default styles;