import { StatusBar } from 'expo-status-bar'
import { View} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import { MANAGER_MATCH } from '../../App';
import { useMatchStore } from '../context/matchContext';



let tabConv:Conversation[]=[];

function LobbySolo(props: { navigation: any; }) {

    const { navigation } = props

    const match = useMatchStore().match;

    return ( 
        <View style={stylesScreen.container}>
            <View style={stylesScreen.bodyCenter}>
            <ButtonGameTypeChoice
                title='Lancer la partie'
                onPress={() => navigation.navigate('GameChoice')}
            />
            </View>

            <Image
                    source={{uri: match.getGame().getImageSource()}}
                />
        </View>
    );
}

export default LobbySolo