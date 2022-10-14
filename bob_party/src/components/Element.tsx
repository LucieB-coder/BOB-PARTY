import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"
import { trace } from "console"

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
        return(
            <View>
                <Text>Type invalide pour ce composant</Text>
            </View>
        )
        /*else if(element.type()==Game)
        {
            return (
                <View>
                    <Pressable onPress={() => Alert.alert("Lancement du jeu")}>
                        <Image
                            style={style}
                            source={element.getImageSource()}
                        />
                    </Pressable>
                </View> 
            )
        }*/
}