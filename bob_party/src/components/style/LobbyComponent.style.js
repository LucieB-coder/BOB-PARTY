import { StyleSheet } from "react-native";

/*
    Stylesheet for the GameComponent component
*/

export default StyleSheet.create(
{
    text :{
        padding: 10,
        textAlign: 'center',
        fontSize: 23,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        alignSelf: 'center',
    },
    imageGameSolo :{
        height: '30%',
        width: '70%',
        alignSelf:'center',
        borderRadius: 25,
        marginTop: "15%"
    },
    imageGameMulti :{
        height: 150,
        width: 150,
        alignSelf:'center',
        borderRadius: 25,
        marginVertical: "7%",
    },
    pressable : {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: '50%',
        marginVertical: '1%',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#0085FF',
    }
})