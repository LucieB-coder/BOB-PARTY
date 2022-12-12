import { FC, ReactNode, useCallback } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { trace } from "console"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/
import styles from './style/Game.style';
import LobbySolo from "../screens/LobbySolo"
import ManagerMatch from "../services/matchServices/managerMatch"
import MatchCreator from "../core/Match/matchCreator"
import { useMatchStore } from "../context/matchContext"
import { MANAGER_MATCH, MANAGER_USER } from "../../appManagers"

export const GameComponent : 

/*
    * game : Game that must be displayed
    * nav : tool needed to allow the navigation between the screens
*/
FC<{game: Game, nav: any}> = 
({game, nav}) => 
{      

    const setMatch = useMatchStore((state) => state.setMatch);


    const createNewMatchSolo = useCallback(async (game : Game, nav: any) => {

        const m=new MatchCreator();
        const tmp=MANAGER_USER.getCurrentUser();
        if (tmp!==null){
            let match=await m.createMatch(tmp, game);
            MANAGER_MATCH.setCurrentMatch(match);
            setMatch(match);
            nav.navigate("GameSolo");
        }
    }, []);

    
    return (
        <View>
            <Pressable onPress={() => createNewMatchSolo(game, nav)}>
                <Image
                    style={styles.image}
                    source={{uri: game.getImageSource()}}
                />
                <Text style={styles.name}>{game.getName()}</Text>
            </Pressable>
        </View> 
    )    
    

}

