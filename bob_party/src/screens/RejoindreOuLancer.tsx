import { StatusBar } from 'expo-status-bar'
import { View, Image} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import { JoinButtonComponent } from '../components/JoinButtonComponent';
import { useMatchStore } from '../context/matchContext';


function RejoindreOuLancer(props: { navigation: any; }) {

    const { navigation } = props

    const match = useMatchStore().match;

    return ( 
        <View style={stylesScreen.container}>
            <TopBar
            nav={navigation}
            state='matchmacking'
            />
            <View style={stylesScreen.bodyCenter}>
            <ButtonGameTypeChoice
                title='Créer une partie'
                onPress={() => navigation.navigate(match?.getGame().getName().replace(/\s/g, ''))}
            />
            <ButtonGameTypeChoice
                title='Rejoindre une partie'
                onPress={() => navigation.navigate(match?.getGame().getName().replace(/\s/g, ''))}
            />
            <JoinButtonComponent game={match?.getGame()} nav={navigation}/>
            </View>

            <Image
                    style={{width:100, height:100}}
                    source={{uri: match?.getGame().getImageSource()}}
                />
        </View>
    );
}

export default RejoindreOuLancer