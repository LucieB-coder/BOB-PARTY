import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        top: window.innerHeight,
        flex: 1,
        backgroundColor: '#45444E',
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    bodyStart: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    bodyStartReverse:{
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
        width: '100%',
    },
    bodyStartCenter: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    bodyCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    RNPView: {
        alignSelf: 'center',
        padding: 20,
    },
  });