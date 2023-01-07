import { FC, ReactNode } from "react"
import { Pressable, Image, ImageStyle, Text, View, Alert, ImageSourcePropType, TextStyle } from "react-native"
import React from "react"
import { Skin } from "../core/skin"
import { Conversation } from "../core/conversation"

/*
    Importing the correct stylesheet
*/
import styles from "./style/ConverstationPreviewComponent.style"
import { SkinComponent } from "./SkinComponent"
import { MANAGER_CONVERSATION, MANAGER_USER } from "../../appManagers"
import { User } from "../core/User/user"
import { useConversationStore } from "../context/conversationContext"

export const ConversationPreviewComponent :
/* Parameters : 
    * skin : Skin to be displayed
*/ 
FC<{conv: Conversation, navigation: any}> = 
({conv, navigation}) => 
{ 

    const setCurrentConv = useConversationStore((state) => state.setCurrentConv);

    const user1 = MANAGER_USER.getCurrentUser();
    let tmp;
    if (conv.getTabMessage().length<2){
        tmp=conv.getTabUser()[0];
    }
    else if (user1?.isEqual(conv.getTabUser()[0])) tmp = conv.getTabUser()[1];
    else tmp = conv.getTabUser()[0];

    const user2 = tmp;

    

    return(
        <Pressable onPress={() => {MANAGER_CONVERSATION.setCurrentConv(conv); setCurrentConv(conv); navigation.navigate(Conversation)}}>
            <View style={styles.conv}>
                <View>
                    <SkinComponent skin={user2.getCurrentSkin()} state='icon' nav={navigation}/>
                </View>
                <View style={{marginLeft: '5%', justifyContent: 'space-evenly'}}>
                    <Text style={styles.textNom}>{conv.getName()}</Text>
                    <Text style={styles.textMess}>{conv.getLastMessage().getMessageContent()}</Text>
                </View>
            </View>
        </Pressable>
    )
}