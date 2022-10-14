import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    footer: {
        flex: 0.15,
        flexDirection: 'row',
        backgroundColor: '#2D2C33',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    icon: {
        width: 65,
        height: 65,
      },
});