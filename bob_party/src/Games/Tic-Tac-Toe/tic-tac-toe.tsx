import {Alert, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import { useMatchStore } from "../../context/matchContext";


export default function tic_tac_toe(props: { navigation: any}){
    const [map,setMap]=useState([
        ['','',''],
        ['','',''],
        ['','',''], 
    ]);

    const {navigation}=props;

    const [currentTurn,setCurrentTurn] = useState("x");

    //const resetMatch = useMatchStore((state) => state.resetMatch);

    const onPressCell = (rowIndex:number,columnIndex:number) => {
        if(map[rowIndex][columnIndex]==""){
            setMap((existingMap) =>{
                const updateMap = [...existingMap]
                updateMap[rowIndex][columnIndex]=currentTurn;
                return updateMap;
            });
        }else{
            Alert.alert("Case déjà prise");
        }
        setCurrentTurn(currentTurn === "x"? "o" : "x");
        checkWinning();
        checkComplete();
    };

    const checkWinning = () =>{
        // Checks rows
        for (let i=0; i<3; i++){
            const isRowXWinning = map[i].every((cell)=> cell==="x");
            const isRowOWinning = map[i] .every((cell)=>cell==="o");
            if(isRowXWinning==true){
                Alert.alert("X won !");
                navigation.goBack();
            }
            else if(isRowOWinning==true){
                Alert.alert("X won !");
                navigation.goBack();
            }
        }
        // Checks columns
        for (let col=0;col<3;col++){
            let isColumnXWinning=true;
            let isColumnOWinning=true;

            for(let row=0;row<3;row++){
                if(map[row][col] !== "x"){
                    isColumnXWinning=false;
                }
                if(map[row][col] !== "o"){
                    isColumnOWinning=false;
                }
            }
            if (isColumnXWinning == true){
                Alert.alert("X won !");
                navigation.goBack();
            }
            if(isColumnOWinning==true){
                Alert.alert("O won !");
                navigation.goBack();
            }
            
        }
        // Checks diag
        let isDiag1XWinning=true;
        let isDiag1OWinning=true;
        let isDiag2XWinning=true;
        let isDiag2OWinning=true;
        for (let i=0;i<3;i++){
            if(map[i][i]!=="x"){
                isDiag1XWinning=false;
            }
            if(map[i][i]!=="o"){
                isDiag1OWinning=false;
            }
            if(map[i][2-i]!=="x"){
                isDiag2XWinning=false;
            }
            if(map[i][2-i]!=="o"){
                isDiag2OWinning=false;
            }
        }
        if(isDiag1OWinning==true || isDiag2OWinning==true){
            Alert.alert("O won !");
            navigation.goBack();
        }
        if(isDiag1XWinning==true || isDiag2XWinning==true){
            Alert.alert("X won !");
            navigation.goBack();
        }
    };

    const checkComplete = () =>{
        /*let isFull;
        for (let row=0; row<3; row++){
            for(let col=0;col<3;col++){
                if(map[row][col]==="o" || map[row][col]==="x"){
                    isFull=false;
                }
            }
        }
        if (isFull!=false){
            Alert.alert("Draw !");
            navigation.goBack();
        }*/
        const isRow0Full = map[0].every((cell)=> cell!=="");
        const isRow1Full = map[1] .every((cell)=>cell!=="");
        const isRow2Full = map[2] .every((cell)=>cell!=="");
        if(isRow0Full==true && isRow1Full==true && isRow2Full==true){
            Alert.alert("Draw !");
            navigation.goBack();
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.text}>TIC TAC TOE</Text>
            <ImageBackground style={styles.grid} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/6/64/Tic-tac-toe.png"}} >
            <View style={styles.map}>
                {map.map((row, rowIndex)=>(
                    <View key={`row-${rowIndex}`} style={styles.row}>
                        {row.map((cell, columnIndex)=> (
                            <Pressable 
                                onPress={() => onPressCell(rowIndex,columnIndex)} 
                                style={styles.cell}
                                key={`row-${rowIndex}-col-${columnIndex}`}
                            >
                                {cell === "o" && <View style={styles.circle}/>}
                                {cell === "x" &&(
                                    <View style={styles.cross}>
                                        <View style={styles.crossLine}/>
                                            <View style={[styles.crossLine, styles.crossLineReversed]}/>
                                    </View>
                                )}
                            </Pressable>
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
        height:"100%",
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
        fontSize: 26,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginBottom:25
    }
})  