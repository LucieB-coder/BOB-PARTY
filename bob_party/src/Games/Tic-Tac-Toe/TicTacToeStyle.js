import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        height:window.innerHeight,
        width:"100%",
        flex:1,
        backgroundColor:"#45444E",
        alignItems:"center",
        justifyContent:"center",
    },
    grid:{
        width:375,
        height:375,
        alignItems:"center",
        justifyContent:"center",
    },
    row:{
        flex:1,
        flexDirection:"row",
    },
    cell:{
        width:100,
        flex:1,
    },
    circle:{
        left:15,
        top:15,
        width:90,
        height:90,
        backgroundColor:"#0085FF",
        borderRadius:50
    },
    cross:{
        width:"100%",
        height:"100%",
    },
    crossLine:{
        left:52,
        top:15,
        position:"absolute",
        width:15,
        height:100,
        borderRadius:50,
        backgroundColor:"#EE9433",
        transform:[{rotate:"45deg"},],
    },
    crossLineReversed:{
        transform:[{rotate:"-45deg"},],
    },
    map:{
        aspectRatio:1,
        padding:5
    },
    text:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginTop:25,
        marginBottom:25
    }
});