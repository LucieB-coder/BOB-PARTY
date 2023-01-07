import { FC} from "react"
import { FlatList } from "react-native"
import React from "react"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/import { StatusBar } from 'expo-status-bar'
import { View, Image} from 'react-native'
import stylesScreen from '../screens/style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { BigBlueButton } from '../components/BigBlueButton';
import { useMatchStore } from '../context/matchContext';
import { MANAGER_MATCH } from '../../appManagers';
import { ScreenIndicator } from '../components/ScreenIndicator';
import { UserPreview } from "./UserPreview"

export const LobbyComponent : 

FC<{nav: any}> = 
({nav}) => 
{

    const match = useMatchStore().match;
    if(MANAGER_MATCH.getCurrentMatch()?.getGame().getNbPlayerMax()==1){
        return ( 
            <View style={stylesScreen.bodyStartCenter}>
                <ScreenIndicator title="Solo"/>
                <View style={stylesScreen.bodyCenter}>
                    <BigBlueButton
                        title='Lancer la partie'
                        onPress={() => nav.navigate(MANAGER_MATCH.getCurrentMatch()?.getGame().getName().replace(/\s/g, ''))}
                    />
                    <Image
                            style={{height: '30%', width: '70%', alignSelf:'center', borderRadius: 25, marginTop: "15%"}}
                            source={{uri: match?.getGame().getImageSource()}}
                    />
                </View>
            </View>
        );
    }
    else{
        return(
            <View style={stylesScreen.bodyStartCenter}>
                <UserPreview user={MANAGER_MATCH.getCurrentMatch()?.getTabUsers()[0]}></UserPreview>
            </View>
        );
    }
}
