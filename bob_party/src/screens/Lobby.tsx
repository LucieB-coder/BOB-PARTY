import { StatusBar } from 'expo-status-bar'
import { View, Image} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { LobbyComponent } from '../components/LobbyComponent';


function Lobby(props: { navigation: any; }) {

    const { navigation } = props

    return ( 
        <View style={stylesScreen.container}>
            <TopBar
            nav={navigation}
            state='matchmacking'
            />
            <View style={stylesScreen.bodyStartCenter}>
                <LobbyComponent nav={navigation}></LobbyComponent>
            </View>
        </View>
    );
}

export default Lobby