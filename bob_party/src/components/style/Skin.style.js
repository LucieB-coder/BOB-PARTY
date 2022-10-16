import { StyleSheet } from "react-native";

/*
    Stylesheet for the Skin component
*/

export default StyleSheet.create({
  icon: {
      width: 50,
      height: 50,
      borderRadius: 50,
  },
  imageWrapper: {
      height: 135,
      width: '40%',
      flexDirection: "column",
      margin: 10,
  },
  imageWrapperProfil: {
    height: 135,
    flexDirection: "column",
    margin: 10,
  },
  imageSkin : {
    borderRadius: 15,
    width: '100%',
    flex:1
  },
  nomSkin :{
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'white',
  },
});