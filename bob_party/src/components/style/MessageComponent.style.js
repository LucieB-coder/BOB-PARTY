import { StyleSheet } from "react-native";

export default StyleSheet.create({
    leftView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
       
    },
    text: {
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.25,
        color: 'white',
        
    },
    leftTextView: {
        backgroundColor: '#888898',
        padding: 15,
        marginLeft: 5,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
    },
    rightTextView: {
        backgroundColor: '#0086FE',
        padding: 15,
        marginRight: 5,
        borderRadius: 15,
        borderBottomRightRadius: 0,
    },
    mainRightView: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        margin: 10,
    },
    rightView: {
        maxWidth: '75%',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
    },
    senderUsername: {
        marginLeft: 55,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: "800",
        lineHeight: 24,
        letterSpacing: 0.25,
        color: 'white',
    },
    mainLeftView: {
        margin: 10,
        maxWidth: '75%',
    }
});