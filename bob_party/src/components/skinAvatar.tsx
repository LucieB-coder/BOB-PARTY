import { FC, ReactNode } from "react"
import { Button, Image, ImageStyle, Text, View } from "react-native"
import { Skin } from "../core/Skin"
import { Asset } from 'expo-asset';
import React from "react"

export const SkinComponent : FC<{skin: Skin, children: ImageStyle}> = ({skin, children}) => {
    return (
    <View>
        <Image source={ skin.getSkinSource()} style={children}/>
    </View>
    )
}