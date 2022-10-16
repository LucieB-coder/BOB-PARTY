import { FC, ReactNode } from "react"
import { Pressable, Image, View} from "react-native"
import React from "react"

/*
    Importing the correct stylesheet
*/
import styles from './style/BotBar.style';

/* 
    Images that are required to create a bottom bar
*/

/*
    Icons when the corresponding screen is not displayed (white ones)
*/
const gamepad = require('../../assets/Icons/UnSelected/Gamepad.png');
const message = require('../../assets/Icons/UnSelected/Chat.png');
const store = require('../../assets/Icons/UnSelected/Store.png');

/*
    Icons when the corresponding screen is displayed (blue ones)
*/
const sgamepad = require('../../assets/Icons/Selected/SGamepad.png');
const smessage = require('../../assets/Icons/Selected/SChat.png');
const sstore = require('../../assets/Icons/Selected/SStore.png');


export const BotBar : 
/* Parameters :
   * nav : tool needed to allow the navigation between the screens
   * state : optional parameter that indicates from which screen the component has been called
        (the string must be the name of the screen)
*/
FC<{nav: any, state?: String}> = 
({nav, state}) => 
{
    /* 
        By default, all the images are the white ones
    */
    var imgLeft=message, imgMid=gamepad, imgRight=store
   
    /*
        For each screen corresponding to a screen of the bottom bar, 
        we need to change one of the icons to the corresponding blue one
            (for example, when the chat screen is displayed, 
             the icon of the messages must switch to the blue one)
    */
    switch (state) {
        case 'Game':
            imgMid = sgamepad
            break;
        case 'Chat':
            imgLeft = smessage
            break;
        case 'Store':
            imgRight = sstore
            break;
        default:
            break;
    }

    return (
    /*
        Once the icons are correctly attributed,
        the function can display the component
    */
        <View style={styles.footer}>
                <Pressable onPress={() => nav.navigate('ChatTab')}>
                    <Image
                        style={styles.icon}
                        source={imgLeft}
                    />
                </Pressable>
                <Pressable onPress={()=> {return (nav.navigate('Home'))}}>
                    <Image
                        style={styles.icon}
                        source={imgMid}
                    />
                </Pressable>
                <Pressable onPress={() => nav.navigate('StoreTab')}>
                    <Image
                        style={styles.icon}
                        source={imgRight}
                    />
                </Pressable>
        </View>
    )
}