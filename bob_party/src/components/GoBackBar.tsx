import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import { Skin } from "../core/Skin"
import React from "react"
import { SkinComponent } from "./skinAvatar"
import MainTabNavigator from "../navigation/AppNavigator"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"


export const GoBackBar : 
FC<{title: String, rightIcon: ImageSourcePropType, styleIcon: ImageStyle, nav: any, styleTitle: TextStyle, styleHeader : any}> = 
({title, rightIcon, styleIcon, nav, styleTitle, styleHeader}) => 
{
    return (
    <View style={styleHeader}>
            <Text style={styleTitle}>{title}</Text>
            <Pressable onPress={() => nav.goBack()}>
                <Image source={rightIcon} style={styleIcon}/>
            </Pressable>
    </View>
    )
}