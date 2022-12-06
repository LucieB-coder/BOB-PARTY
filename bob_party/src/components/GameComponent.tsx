import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { trace } from "console"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/
import styles from './style/Game.style';
import LobbySolo from "../screens/LobbySolo"

export const GameComponent : 
/*
    * game : Game that must be displayed
    * nav : tool needed to allow the navigation between the screens
*/
FC<{game: Game, nav: any}> = 
({game, nav}) => 
{      
    
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

function createNewMatchSolo(game : Game, nav: any) {
    
    
    nav.navigate("LobbySolo")
}