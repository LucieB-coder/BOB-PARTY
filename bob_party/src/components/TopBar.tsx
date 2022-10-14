import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import { Skin } from "../core/Skin"
import React from "react"
import { SkinComponent } from "./skinAvatar"
import MainTabNavigator from "../navigation/AppNavigator"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"


export const TopBar : 
FC<{skin: Skin, styleAvatar: ImageStyle, title: String, rightIcon: ImageSourcePropType, styleIcon: ImageStyle,nav: any, styleTitle: TextStyle, styleHeader : any}> = 
({skin, styleAvatar, title, rightIcon, styleIcon, nav, styleTitle, styleHeader}) => 
{
    return (
    <View style={styleHeader}>
        <Pressable onPress={() => nav.navigate('ProfileTab')}>
                <SkinComponent skin={skin} children={styleAvatar} />
            </Pressable>
            <Text style={styleTitle}>{title}</Text>
            <Pressable onPress={() => nav.navigate('Settings')}>
                <Image source={rightIcon} style={styleIcon}/>
            </Pressable>
    </View>
    )
}