import { StyleSheet } from 'react-native';

/*
    Stylesheet for the TopBar component
*/

export default StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        marginVertical: 12.5,
    },
    viewPlusButton: {
        zIndex: 2,
        position: 'absolute',
        alignSelf:'center',
        marginTop: '145%'
    },
    pressablePlusButton: {
        alignItems:"center",
        alignContent:"center",
        backgroundColor: '#0085FF',
        width:75,
        height: 75,
        borderRadius: 100,
        marginBottom: '4%',
    },
});