import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"
import styles from "./style/Skin.style"

export const SkinComponent : 
FC<{skin: Skin, state: String}> = 
({skin, state}) => 
{
    switch (state) {
        case 'icon':
            return (
                <View>
                    <Image source={ skin.getSkinSource()} style={styles.icon}/>
                </View>
            )
        
        case 'shop':
            return(
                <Pressable onPress={() => Alert.alert("Achat du skin")} style={styles.imageWrapper}>
                    <Text style={styles.nomSkin}>{skin.getSkinName()}</Text>
                    <Image
                        style={styles.imageSkin}
                        source={skin.getSkinSource()}
                    />
                    <Text style={styles.nomSkin}>100€</Text>
                </Pressable>
            )
        case 'profile':
            return(
                <Pressable onPress={() => Alert.alert("Achat du skin")} style={styles.imageWrapper}>
                    <Text style={styles.nomSkin}>{skin.getSkinName()}</Text>
                    <Image
                        style={styles.imageSkin}
                        source={skin.getSkinSource()}
                    />
                </Pressable>
            )
        default:
            break;
    }
}