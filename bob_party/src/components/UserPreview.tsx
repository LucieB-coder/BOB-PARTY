import { FC, ReactNode, useCallback } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { trace } from "console"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/
import styles from './style/UserPreview.style';
import { User } from "../core/User/user"

export const UserPreview : 

/*
    * match : match that must be displayed
    * nav : tool needed to allow the navigation between the screens
*/
FC<{user: User | null}> = 
({user}) => 
{      
    console.log(user);
    if(user !== null){
        return (
            <View style= {styles.view}>
                    <Image
                        style={styles.image}
                        source={{uri: user.getCurrentSkin().getSkinSource()}}
                    />
                    <Text style={styles.text}>{user.getUsername()}</Text>
            </View> 
        )    
    }
    else{
        return (
            <View style={styles.undefinedView}>
                <Text style={styles.text}>•••</Text>
            </View>
        )
    }

}