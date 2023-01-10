import { Pressable, TextInput, View, Text, Alert } from "react-native";
import styles from "./style/SignIn.style";
import stylesScreen from './style/screens.style'
import { useState } from "react";
import React from "react";
import { MANAGER_CONVERSATION, MANAGER_USER } from "../../appManagers";
import { resolvePreset } from "@babel/core";
import { useConversationStore } from "../context/conversationContext";
import { socket } from "../../socketConfig";

export default function AddConversation(props: {navigation:any}){
    const {navigation}=props;
    const [name, setName] = useState('');
    const [listId, setListId] = useState('');

    const setTabConv = useConversationStore((state) => state.setTabConv);


    async function handleCreateConv(name: string, listId: string){
        if (name.trim().length === 0){
            Alert.alert("Everyone needs a name even a conversation :)");
            return;
        }
        if (name.length>50){
            Alert.alert("The conversation name should not exceed 30 character");
            return;
        }
        if (listId.trim().length === 0){
            Alert.alert("Specify the id of your friends to chat with them :)");
            return;
        }
        listId = listId.replace(/\s+/g, '');        
        const tabId= listId.split(',').map(function(item) {
            return parseInt(item, 10);
        });
        let length=0;
        let end=new Promise<void>((resolve, reject) => {
            tabId.forEach(async id =>{
                if (isNaN(id)){
                    Alert.alert("The id must only be numbers");
                    return;
                }
                if (id===MANAGER_USER.getCurrentUser()?.getId()){
                    Alert.alert("You can't be part of the conversation 2 times :(");
                    return;
                }
                let us=await MANAGER_USER.getLoaderUser().loadByID(id).then((res)=>{
                    if (res===null){
                        Alert.alert("The id: " + id + " doesn't exist");
                        return;
                    }
                    length++;
                    if (length==tabId.length){
                        resolve();
                    }
                });
            });
        });
        await Promise.all([end]);
        const tmp=MANAGER_USER.getCurrentUser();
        if (tmp!==null){
            await MANAGER_CONVERSATION.getsaverConversation().saveConversation(name, tmp, tabId, tmp.getUsername() + " created a conversation", new Date()).then((res)=>{
                if (res!==null){
                    MANAGER_CONVERSATION.getTabConv().push(res);
                    MANAGER_CONVERSATION.getTabConv()?.sort(
                        (objA, objB) => objB.getLastMessage().getMessageDate().getTime() - objA.getLastMessage().getMessageDate().getTime(),
                    );
                    setTabConv(MANAGER_CONVERSATION.getTabConv());
                    socket.emit("createConversation", tabId, res);
                    socket.emit("inConv", res);
                    navigation.goBack();
                }
            });
        }
    }

    return (
        <View style={stylesScreen.container}>
            <View style={stylesScreen.bodyCenter}>
                <TextInput style={styles.textInput} placeholder='Conversation name' onChangeText={(val) => setName(val)} autoCapitalize='none' />
                <TextInput style={styles.textInput} placeholder="Players' id (separated by a comma)" onChangeText={(val) => setListId(val)} autoCapitalize='none'/>
                <Pressable style={styles.button} onPress={() => handleCreateConv(name, listId)}>
                    <Text style={styles.text}>Add conversation</Text>
                </Pressable>
            </View>
        </View>
    )
}