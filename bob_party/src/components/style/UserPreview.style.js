import { StyleSheet } from "react-native";

/*
    Stylesheet for the GameComponent component
*/

export default StyleSheet.create(
{
    image : {
        borderRadius: 15,
        margin: 10,
        width: 70,
        height: 70,
      },
      text :{
        textAlign: 'center',
        fontSize: 23,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        alignSelf: 'center',
      },
      view : {
        flexDirection:'row',
        width:"80%",
        backgroundColor: "#2C2C34",
        marginVertical: 10,
        borderRadius: 15
    },
    undefinedView: {
        flexDirection: 'column',
        height: 90,
        width:"80%",
        backgroundColor: "#9191AC",
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center',

    }
})