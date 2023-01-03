import { FC, ReactNode, useCallback } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { trace } from "console"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/
import styles from './style/PlayerBox.style';
import LobbySolo from "../screens/LobbySolo"
import ManagerMatch from "../services/matchServices/managerMatch"
import MatchCreator from "../core/Match/matchCreator"
import { useMatchStore } from "../context/matchContext"
import { MANAGER_MATCH, MANAGER_USER } from "../../appManagers"
import { Match } from "../core/Match/match"
import { User } from "../core/User/user"

export const PlayerBox : 

/*
    * match : match that must be displayed
    * nav : tool needed to allow the navigation between the screens
*/
FC<{user: User}> = 
({user}) => 
{      
    return (
        <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={{uri: user.getCurrentSkin().getSkinSource()}}
                />
                <Text style={styles.nomJoueur}>{user.getUsername()}</Text>
        </View> 
    )    
    

}