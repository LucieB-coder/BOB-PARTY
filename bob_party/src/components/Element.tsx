import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"
import { trace } from "console"
import { Game } from "../core/game"

export const ElementAffichage : 
FC<{element: any, styleImage: ImageStyle, styleTitle : TextStyle,nav: any}> = 
({element, styleImage, styleTitle, nav}) => 
{
        if (element instanceof Skin)
        {
            return(
                <View>
                    <Pressable onPress={() => Alert.alert("Achat du skin")}>
                        <Image
                            style={styleImage}
                            source={element.getSkinSource()}
                        />
                        <Text style={styleTitle}>{element.getSkinName()}</Text>
                    </Pressable>
                </View>
            )
        }
        if(element instanceof Game)
        {
            return (
                <View>
                    <Pressable onPress={() => Alert.alert("Lancement du jeu")}>
                        <Image
                            style={styleImage}
                            source={element.getImageSource()}
                        />
                        <Text style={styleTitle}>{element.getName()}</Text>
                    </Pressable>
                </View> 
            )
        }
        console.log('Type invalide pour ce composant')
        return(
            <View>
                <Text>Type invalide pour ce composant</Text>
            </View>
        )
        
}