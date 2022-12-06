import { StatusBar } from 'expo-status-bar'
import { View} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';



let tabConv:Conversation[]=[];

function Home(props: { navigation: any; }) {

    const { navigation } = props


    return ( 
        <View style={stylesScreen.container}>
            <TopBar
                nav={navigation}
                state= 'Home'
            />
            <View style={stylesScreen.bodyCenter}>
            <ButtonGameTypeChoice
                title='Jouer Seul'
                onPress={() => navigation.navigate('GameChoiceTab')}
            />
            <ButtonGameTypeChoice
                title='Défier mes amis'
                onPress={() => navigation.navigate('GameChoiceTab')}
            />
            </View>
            <BotBar 
                nav={navigation}
                state='Home'
            />
        </View>
    );
}

export default Home