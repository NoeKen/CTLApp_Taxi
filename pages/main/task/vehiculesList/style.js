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
    backgroundColor: 'rgba(255, 234, 242, 1)',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 6,
    marginBottom: 10
  },

  backgroundImage: {
    resizeMode: 'cover',
    height: 50,
    width: 50,
    marginLeft: 20
  },
  nameText: {
    justifyContent: 'center',
    marginRight: 20
  },
  nameMat: {
    color: '#FF237B',
    fontWeight: 'bold',
    fontSize: 18,
  },
  numCol: {
      color: 'black',
    fontWeight: 'bold',
    fontSize: 14
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