import { StatusBar } from 'expo-status-bar'
import { View, Image} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { BigBlueButton } from '../components/BigBlueButton';
import { useMatchStore } from '../context/matchContext';
import { MANAGER_MATCH } from '../../appManagers';
import { ScreenIndicator } from '../components/ScreenIndicator';


function LobbySolo(props: { navigation: any; }) {

    const { navigation } = props

    const match = useMatchStore().match;

    return ( 
        <View style={stylesScreen.container}>
            <TopBar
            nav={navigation}
            state='matchmacking'
            />
            <View style={stylesScreen.bodyStartCenter}>
                <ScreenIndicator title="Solo"/>
                <View style={stylesScreen.bodyCenter}>
                    <BigBlueButton
                        title='Lancer la partie'
                        onPress={() => navigation.navigate(MANAGER_MATCH.getCurrentMatch()?.getGame().getName().replace(/\s/g, ''))}
                    />
                    <Image
                            style={{height: '30%', width: '70%', alignSelf:'center', borderRadius: 25, marginTop: "15%"}}
                            source={{uri: match?.getGame().getImageSource()}}
                    />
                </View>
            </View>
        </View>
    );
}

export default LobbySolo