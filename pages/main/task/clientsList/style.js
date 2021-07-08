import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
  maine: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
  titre: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#FF237B'
  },
  container: {
    flexDirection: 'row',
    // backgroundColor: '#FF237B',
    backgroundColor: 'rgba(255, 234, 242, 1)',
    justifyContent: 'space-around',
    height: 80,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 6,
    marginBottom: 10
  },

  backgroundImage: {
    resizeMode: 'cover',
    height: 70,
    width: 70,
    borderRadius: 40,
  },
  nameText: {
    justifyContent: 'center'
  },
  nameText: {
    color: '#FF237B',
    fontWeight: 'bold',
    fontSize: 18
  },
  numText: {
      color: 'black',
    fontWeight: 'bold',
    fontSize: 16
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


  
});
export default styles;