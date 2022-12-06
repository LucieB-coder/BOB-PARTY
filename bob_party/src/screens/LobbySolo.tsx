import { StatusBar } from 'expo-status-bar'
import { View} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';



let tabConv:Conversation[]=[];

function LobbySolo(props: { navigation: any; }) {

    const { navigation } = props


    return ( 
        <View style={stylesScreen.container}>
            <View style={stylesScreen.bodyCenter}>
            <ButtonGameTypeChoice
                title='Lancer la partie'
                onPress={() => navigation.navigate('GameChoice')}
            />
            </View>
        </View>
    );
}

export default LobbySolo