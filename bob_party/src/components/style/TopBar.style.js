import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flex: 0.15,
        flexDirection: 'row',
        backgroundColor: '#2D2C33',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    icon: {
        width: 50,
        height: 50,
    },
    titre: {
      flex: 0.7,
      flexDirection: 'column',
      textAlign: 'center',
      fontSize: 30,
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});