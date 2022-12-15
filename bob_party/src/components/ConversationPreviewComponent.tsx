import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"
import { Conversation } from "../core/conversation"

/*
    Importing the correct stylesheet
*/
import styles from "./style/ConverstationPreviewComponent.style"
import { SkinComponent } from "./Skin"
import { MANAGER_USER } from "../../appManagers"
import { User } from "../core/User/user"

export const ConversationPreviewComponent :
/* Parameters : 
    * skin : Skin to be displayed
*/ 
FC<{conv: Conversation, navigation: any}> = 
({conv, navigation}) => 
{ 
    const user1 = MANAGER_USER.getCurrentUser();
    let tmp;

    if (conv.getTabUser()[0] === user1) tmp = conv.getTabUser()[1];
    else tmp = conv.getTabUser()[0];

    const user2 = tmp;

    

    return(
        <Pressable onPress={() => navigation.navigate(Conversation)}>
            <View style={styles.conv}>
                <View>
                    <SkinComponent skin={user2.getCurrentSkin()} state='icon' nav={navigation}/>
                </View>
                <View style={{marginLeft: '5%', justifyContent: 'space-evenly'}}>
                    <Text style={styles.textNom}>{conv.getLastMessage().getMessageSender().getUsername()}</Text>
                    <Text style={styles.textMess}>{conv.getLastMessage().getMessageContent()}</Text>
                </View>
            </View>
        </Pressable>
    )
}