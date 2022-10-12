import { FC, ReactNode } from "react"
import { Button, Image, ImageStyle, Text, View } from "react-native"
import { Skin } from "../core/Skin"
import React from "react"

export const SkinComponent : FC<{skin: Skin, children: ImageStyle, childrenTest: ReactNode}> = ({skin, children, childrenTest}) => {


    return (
    <View>
        <Image source={{uri: skin.Source}} style={children}/>
        {childrenTest}
    </View>
    )
}