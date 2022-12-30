import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"
import { Conversation } from "../core/conversation"

/*
    Importing the correct stylesheet
*/
import styles from "./style/MessageComponent.style.js"
import { SkinComponent } from "./Skin"
import { MANAGER_USER } from "../../appManagers"
import { User } from "../core/User/user"
import { Message } from "../core/message"

export const MessageComponent :
/* Parameters : 
    * skin : Skin to be displayed
*/ 
FC<{mess: Message}> = 
({mess}) => 
{ 
    let messStyle;
    if (MANAGER_USER.getCurrentUser()?.isEqual(mess.getMessageSender())){
        return(
            
            <View style={styles.mainRightView}>
                <View style={styles.rightView}>    
                    <View>
                        <SkinComponent skin={mess.getMessageSender().getCurrentSkin()} state='icon'/>
                    </View>
                    <View style={styles.rightTextView}>
                        <Text style={styles.text}>{mess.getMessageContent()}</Text>
                    </View>
                </View>
            </View>
        )
    }
    else{
        return(
            <View style={styles.mainLeftView}>
                <Text style={styles.senderUsername}>{mess.getMessageSender().getUsername()}</Text>
                <View style={styles.leftView}>
                    <View>
                        <SkinComponent skin={mess.getMessageSender().getCurrentSkin()} state='icon'/>
                    </View>
                    <View style={styles.leftTextView}>
                        <Text style={styles.text}>{mess.getMessageContent()}</Text>
                    </View>
                </View>
            </View>
        )
    }

    
}