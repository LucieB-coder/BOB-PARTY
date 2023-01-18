import { StyleSheet } from "react-native";


export default StyleSheet.create({
      textInputLogin: {
        width: '70%',
        height:  60,
        backgroundColor: 'white',
        marginTop: 10,
        paddingLeft: 15,
        borderRadius: 15
      },
      textInputPassword: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      },
      viewTextInputPassword: {
        width: '70%',
        height: 60,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginTop: 10,
        borderRadius: 15
      },
      viewIndicator: {
        flex: 1,
        alignSelf: 'center'
      },
      indicator: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        borderRadius: 50,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 225,
        margin:'10%',
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
        marginTop: 20,
      },
      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginVertical: 10,
      },
      textLink:{
        fontSize:15,
        color:'white',
        textDecorationLine:"underline",   
      },
})

