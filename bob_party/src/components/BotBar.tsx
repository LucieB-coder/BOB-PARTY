import { FC, ReactNode } from "react"
import { Pressable, Image, View} from "react-native"
import React from "react"
import styles from './style/BotBar.style';


const gamepad = require('../../assets/Icons/UnSelected/Gamepad.png');
const message = require('../../assets/Icons/UnSelected/Chat.png');
const store = require('../../assets/Icons/UnSelected/Store.png');

const sgamepad = require('../../assets/Icons/Selected/SGamepad.png');
const smessage = require('../../assets/Icons/Selected/SChat.png');
const sstore = require('../../assets/Icons/Selected/SStore.png');


export const BotBar : 
FC<{nav: any, state?: String }> = 
({nav, state}) => 
{
    var imgLeft=message, imgMid=gamepad, imgRight=store
   
    switch (state) {
        case 'Home':
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
    <View style={styles.footer}>
            <Pressable onPress={() => nav.navigate('ChatTab')}>
                <Image
                    style={styles.icon}
                    source={imgLeft}
                />
            </Pressable>
            <Pressable onPress={()=> {
                if (state==='Game') {
                    return ( nav.goBack())    
                } 
                return (nav.navigate('HomeTab'))
            }}>
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