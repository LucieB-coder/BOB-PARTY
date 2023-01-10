import { FC, ReactNode, useState } from "react"
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
    const [user,setUser]=useState(MANAGER_USER.getCurrentUser());
    const [initVar,setInitVar]=useState(0);


    init();

    function init(){
        if (initVar===0){
            setInitVar(1);
            if (conv.getTabUser().length<2){
                setUser(MANAGER_USER.getCurrentUser());
            }
            else if (MANAGER_USER.getCurrentUser()?.isEqual(conv.getLastMessage().getMessageSender())){
                setUser(conv.getLastMessage().getMessageSender());
            }
            else{
                setUser(conv.getTabUser()[1]);
            }
        }
    }
    

    return(
        <Pressable onPress={() => {MANAGER_CONVERSATION.setCurrentConv(conv); setCurrentConv(conv); navigation.navigate(Conversation)}}>
            <View style={styles.conv}>
                <View>
                    <SkinComponent skin={user?.getCurrentSkin()} state='icon' nav={navigation}/>
                </View>
                <View style={{marginLeft: '5%', justifyContent: 'space-evenly'}}>
                    <Text style={styles.textNom}>{conv.getName()}</Text>
                    <Text style={styles.textMess}>{conv.getLastMessage().getMessageContent()}</Text>
                </View>
            </View>
        </Pressable>
    )
}