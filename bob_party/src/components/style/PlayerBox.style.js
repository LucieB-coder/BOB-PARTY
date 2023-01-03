import { StyleSheet } from "react-native";

/*
    Stylesheet for the Skin component
*/

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#45445E',
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
},
  icon: {
      width: 70,
      height: 70,
      borderRadius: 70,
      marginRight: 10,
  },
  nomJoueur :{
    fontSize: 25,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'white',
  },
});