import { FC, ReactNode, useCallback } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle, TextInput } from "react-native"
import React from "react"
import { trace } from "console"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/
import stylesGame from './style/Game.style';
import styles from "./style/ButtonGameTypeChoice.style"
import LobbySolo from "../screens/LobbySolo"
import ManagerMatch from "../services/matchServices/managerMatch"
import MatchCreator from "../core/Match/matchCreator"
import { useMatchStore } from "../context/matchContext"
import { MANAGER_MATCH, MANAGER_USER } from "../../appManagers"

export const JoinButtonComponent : 

/*
    * game : Game that must be displayed
    * nav : tool needed to allow the navigation between the screens
*/
FC<{game: Game | undefined, nav: any}> = 
({game, nav}) => 
{      

    const setMatch = useMatchStore((state) => state.setMatch);


    const createNewMatchSolo = useCallback(async (game : Game | undefined, nav: any) => {

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
      <View style={styles.button}>
          <TextInput/>
          <Pressable onPress={() => createNewMatchSolo(game, nav)}>
              <Text style={styles.text}>Launch</Text>
          </Pressable>
      </View>
  );
    

}