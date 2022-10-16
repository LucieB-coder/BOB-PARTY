import { FC} from "react"
import {Image, ImageStyle, View } from "react-native"
import { Skin } from "../core/Skin"
import React from "react"
import { Asset } from "expo-asset"

export const SkinComponent : FC<{skin: Skin, children: ImageStyle}> = ({skin, children}) => {

    return (
    <View>
        <Image source={ skin.getSkinSource()} style={children}/>
    </View>
    )
}