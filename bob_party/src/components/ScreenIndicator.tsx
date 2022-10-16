import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import styles from './style/ScreenIndicator.style'

export const ScreenIndicator: FC<{title: String}> = ({title}) => 
{
    return(
        <View style={styles.textTopView}>
            <Text style={styles.textTop}>{title}</Text>
        </View>
    )
}