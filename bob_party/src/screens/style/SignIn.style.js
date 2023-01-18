import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 225,
        marginTop: '15%',
        margin:'5%',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#0085FF',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      textLink:{
        fontSize:15,
        color:'white',
        textDecorationLine:"underline",   
      },
      textInput: {
        width: '80%',
        height: '5%',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 15
      }
  });