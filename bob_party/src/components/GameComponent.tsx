import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { trace } from "console"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/
import styles from './style/Game.style';

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
            <Pressable onPress={() => nav.navigate('')}>
                <Image
                    style={styles.image}
                    source={game.getImageSource()}
                />
                <Text style={styles.name}>{game.getName()}</Text>
            </Pressable>
        </View> 
    )       
}