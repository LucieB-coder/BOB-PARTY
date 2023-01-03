import {Alert, Button, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import styles from './TicTacToeStyle.js';
import { useMatchStore } from "../../context/matchContext";
import { current } from "@reduxjs/toolkit";
import { ScreenIndicator } from "../../components/ScreenIndicator";
import { TopBar } from "../../components/TopBar";
import { socket } from "../../../socketConfig";
import { MANAGER_MATCH, MANAGER_USER } from "../../../appManagers";


export default function TicTacToeOnline(){

    const [init, setInit]=useState(0);

    setUpTicTacToeOnline();

    const [map,setMap]=useState([
        ['','',''],
        ['','',''],
        ['','',''], 
    ]);

    const [turnUser, setTurnUser]=useState("x");
    /*
    if (MANAGER_MATCH.getCurrentMatch()?.getTabUsers()[0].isEqual(MANAGER_USER.getCurrentUser())){
        turn="o";
    }
    */

    //const {navigation}=props;

    const [currentTurn,setCurrentTurn] = useState("x");


    const onPressCell = (rowIndex:number,columnIndex:number) => {
        if (turnUser!==currentTurn){
            Alert.alert("ce n'est pas à votre tour de jouer");
            return;
        }
        if(map[rowIndex][columnIndex]==""){
            setMap((existingMap) =>{
                const updateMap = [...existingMap]
                updateMap[rowIndex][columnIndex]=currentTurn;
                return updateMap;
            });
            socket.emit("playTicTacToe", 1, rowIndex, columnIndex, currentTurn);
            setCurrentTurn(currentTurn === "x"? "o" : "x");
            const retour=checkWinning();
            if(retour!=true){
                checkComplete();
            }
            
        }else{
            Alert.alert("Case déjà prise");   
        }
        
    };

    function setUpTicTacToeOnline() {
        if (init===0){
            setInit(1);
            socket.emit("inMatch", 1);
            socket.on("oppPlayTicTacToe",  (rowIndex, columnIndex, turn) =>{

                setMap((existingMap) =>{
                    const updateMap = [...existingMap]
                    updateMap[rowIndex][columnIndex]=turn;
                    return updateMap;
                });
                if (!checkWinning()){
                    checkComplete();
                }
                if (turn==="x"){
                    setCurrentTurn("o");
                    setTurnUser("o");
                }
                else{
                    setCurrentTurn("x");
                    setTurnUser("x");
                }

            });
        }
    }

    const checkWinning = () =>{
        // Checks rows
        for (let i=0; i<3; i++){
            const isRowXWinning = map[i].every((cell)=> cell==="x");
            const isRowOWinning = map[i] .every((cell)=>cell==="o");
            if(isRowXWinning==true){
                Alert.alert("X won !");
                //navigation.goBack();
                return true;
            }
            else if(isRowOWinning==true){
                Alert.alert("O won !");
                //navigation.goBack();
                return true;
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
                //navigation.goBack();
                return true;
            }
            if(isColumnOWinning==true){
                Alert.alert("O won !");
                //navigation.goBack();
                return true;
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
            //navigation.goBack();
            return true;
        }
        if(isDiag1XWinning==true || isDiag2XWinning==true){
            Alert.alert("X won !");
            //navigation.goBack();
            return true;
        }
    };

    const checkComplete = () =>{
        const isRow0Full = map[0].every((cell)=> cell!=="");
        const isRow1Full = map[1] .every((cell)=>cell!=="");
        const isRow2Full = map[2] .every((cell)=>cell!=="");
        if(isRow0Full==true && isRow1Full==true && isRow2Full==true){
            Alert.alert("Draw !");
            //navigation.goBack();
            return false;
        }
    };

    return(
        <View style={styles.container}>
            <ScreenIndicator title='TIC TAC TOE'/>
            <Text style={styles.text}>Current turn: {currentTurn}</Text>
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


