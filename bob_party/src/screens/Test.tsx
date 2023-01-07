import { StatusBar } from 'expo-status-bar'
import { useState } from 'react';
import { StyleSheet, View, Text, Alert, Pressable, Image, ImageBackground} from 'react-native'
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { SkinComponent } from '../components/SkinComponent';
import { Skin } from '../core/skin';
import { MessageComponent } from '../components/MessageComponent';
import { MANAGER_CONVERSATION, MANAGER_USER } from '../../appManagers';
import { Message } from '../core/message';
import { User } from '../core/User/user';


function Test(props: { navigation: any; }) {
    
    const { navigation } = props

    let skin= new Skin(1, "Bob","https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobClassic.png", 0);
    
    let user1 = new User(1, "Alban", "oui", "ouioui", "homme", new Date(2022,12,12), 555, 667, 12, skin, [skin]);

    let message = new Message(1, "bonjour je m'appelle alban et blablablablablablablafkfjsbndfihbsfiusbdfisdubfsdijbfisdjfbsdiufbsdifbsdifbsdibfsdifbsdifbsdifbsdibfsdibfsdiubfsdibfsdiubfsdiubfsqhdbqshjdbsqhbdqshbdqksjb", user1, new Date(2022,12,12));


    return (
        <View style={{backgroundColor: '#45444D', flex: 1, flexDirection: 'column-reverse', paddingBottom: 50,}}>
            <MessageComponent mess={message}></MessageComponent>
        </View>
    );
}

export default Test