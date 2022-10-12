import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"


export const BotBar : 
FC<{messages:ImageSourcePropType, games: ImageSourcePropType, shop: ImageSourcePropType, style: ImageStyle, styleStore: ImageStyle, nav: any, styleBar : any}> = 
({messages, games, shop,style, styleStore, nav,styleBar}) => 
{
    return (
    <View style={styleBar}>
            <Pressable onPress={() => nav.navigate('ChatTab')}>
                <Image
                    style={style}
                    source={messages}
                />
            </Pressable>
            <Pressable onPress={()=> nav.navigate('HomeTab')}>
                <Image
                    style={style}
                    source={games}
                />
            </Pressable>
            <Pressable onPress={() => nav.navigate('StoreTab')}>
                <Image
                    style={styleStore}
                    source={shop}
                />
            </Pressable>
    </View>
    )
}