import {ImageBackground, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";

export default function tic_tac_toe(){
    const [map,setMap]=useState([
        ['o','',''],
        ['','x','x'],
        ['o','',''], 
    ]);

    return(
        <View style={styles.container}>
            <Text>TIC TAC TOE</Text>
            <ImageBackground style={styles.grid} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/6/64/Tic-tac-toe.png"}} >
            <View style={styles.map}>
                {map.map((row)=>(
                    <View style={styles.row}>
                        {row.map((cell)=> (
                            <View style={styles.cell}>
                                {cell === "o" && <View style={styles.circle}/>}
                                {cell === "x" &&(
                                    <View style={styles.cross}>
                                        <View style={styles.crossLine}/>
                                            <View style={[styles.crossLine, styles.crossLineReversed]}/>
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                ))}
            </View>
            
            </ImageBackground>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
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
        backgroundColor:"#0085FF",
        transform:[{rotate:"45deg"},],
    },
    crossLineReversed:{
        transform:[{rotate:"-45deg"},],
    },
    map:{
        aspectRatio:1,
        padding:5
    }
})  