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

export const GameList : 

FC<{nav: any}> = 
({nav}) => 
{

    const currentGameType= useGameStore((state) => state.currentGameType);

    let gameList : Game[] | undefined;

    if(currentGameType === "solo" ){
        console.log("sole");
        gameList = useGameStore((state) => state.tabGameSolo);
    }
    else if(currentGameType === "multi"){
        console.log("multi");
        gameList = useGameStore((state) => state.tabGameMulti);
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
