import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import styles from './style/BotBar.style';


const gamepad = require('../../assets/Icons/Selected/SGamepad.png');
const message = require('../../assets/Icons/UnSelected/Chat.png');
const store = require('../../assets/Icons/UnSelected/Store.png');

export const BotBar : 
FC<{messages:ImageSourcePropType, games: ImageSourcePropType, shop: ImageSourcePropType,  nav: any}> = 
({nav}) => 
{
    return (
    <View style={styles.footer}>
            <Pressable onPress={() => nav.navigate('ChatTab')}>
                <Image
                    style={styles.icon}
                    source={message}
                />
            </Pressable>
            <Pressable onPress={()=> nav.navigate('HomeTab')}>
                <Image
                    style={styles.icon}
                    source={gamepad}
                />
            </Pressable>
            <Pressable onPress={() => nav.navigate('StoreTab')}>
                <Image
                    style={styles.icon}
                    source={store}
                />
            </Pressable>
    </View>
    )
}