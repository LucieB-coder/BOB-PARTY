import { FC} from "react"
import { FlatList } from "react-native"
import React from "react"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/
import { useGameStore } from "../context/gameContext"
import { GameComponent } from "./GameComponent"
import ManagerGame from "../services/gameService/managerGame"
import { MANAGER_GAME, MANAGER_USER } from "../../appManagers"

export const GameList : 

FC<{nav: any}> = 
({nav}) => 
{


    let gameList : Game[] | undefined;

    if(MANAGER_GAME.currentGameType === "solo" ){
        console.log("solo");
        gameList = MANAGER_GAME.getTabGameSolo();
        console.log(gameList);
    }
    else if(MANAGER_GAME.currentGameType === "multi"){
        console.log("multi");
        gameList = MANAGER_GAME.getTabGameMulti();
    }
    else{
        console.log("crotte");   
    }

    return(
        <FlatList 
        data={gameList}
        numColumns={2}
        columnWrapperStyle={{ flex: 1, justifyContent: "space-evenly"}}
        keyExtractor={item =>item.getName()}
        renderItem={({item}) => <GameComponent game={item} nav={nav}/>} />
    )

}
