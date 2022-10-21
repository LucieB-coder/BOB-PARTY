import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"
import { Conversation } from "../core/conversation"

/*
    Importing the correct stylesheet
*/
import styles from "./style/ConverstationComponent.style"
import { SkinComponent } from "./Skin"

export const ConversationComponent :
/* Parameters : 
    * skin : Skin to be displayed
    * state : Indicates from wich screen the component has been called
*/ 
FC<{conv: Conversation, state: String}> = 
({conv, state}) => 
{
    /* The display of this component depends of the screen from where it has been called:
        * From the TopBar (icon) : Small image in a circle
        * From the shop (shop) : Image + Name + Price, Pressable => Buy the skin
        * From the profile (profile) : Name + Image, Pressable => Change the skin
    */
    switch (state) {
        case 'Preview':
            return(
                <View style={{flexDirection: 'row', height: 70, borderBottomWidth: 2,borderBottomColor: '#2D2C33', paddingLeft: '5%',}}>
                    <View style={{alignSelf: 'center'}}>
                        <SkinComponent skin={conv.getTabUser()[1].getCurrentSkin()} state='icon'/>
                    </View>
                    <View style={{marginLeft: '5%', justifyContent: 'space-evenly'}}>
                        <Text style={styles.textNom}>{conv.getTabUser()[1].getUsername()}</Text>
                        <Text style={styles.textMess}>{conv.getLastMessage()}</Text>
                    </View>
                </View>
            )
        default:
            break;
    }
}