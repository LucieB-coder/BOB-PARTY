import { FC, useState} from "react"
import { Button, FlatList, Pressable } from "react-native"
import React from "react"
import { Game } from "../core/game"

/*
    Importing the correct stylesheet
*/import { StatusBar } from 'expo-status-bar'
import { View, Image, Text} from 'react-native'
import stylesScreen from '../screens/style/screens.style'
import style from './style/LobbyComponent.style'
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
    const setTabUser = useMatchStore((state) => state.setTabUser);

    const [initUsers, setInitUsers] = useState(0);

    function getUsers(){
        if (initUsers===0){
            setInitUsers(1);
            const tmp:any=[];
            MANAGER_MATCH.getCurrentMatch()?.getTabUsers().forEach(user => {
                tmp.push(user);
            });
            const tmpGame=MANAGER_MATCH.getCurrentMatch()?.getGame();
            if (tmpGame!=undefined){
                for (let i=tmp.length; i<tmpGame.getNbPlayerMax(); i++){
                    tmp.push(null);
                }
            }
            setTabUser(tmp);
        }
    }


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
                            style={style.imageGameSolo}
                            source={{uri: MANAGER_MATCH.getCurrentMatch()?.getGame().getImageSource()}}
                    />
                </View>
            </View>
        );
    }
    else{
        getUsers();
        return(
            <View style={stylesScreen.bodyStartCenter}>
                <Text style={style.text}>Match ID : {MANAGER_MATCH.getCurrentMatch()?.getCode()}</Text>
                <FlatList 
                data={useMatchStore().tabUser} 
                keyExtractor={usr =>usr?.getUsername() || usr}
                renderItem={({item}) => <UserPreview user={item}/>}
                style = {{width: '100%',}}
                />
                <Pressable
                    style={style.pressable}
                    onPress={() => nav.navigate(MANAGER_MATCH.getCurrentMatch()?.getGame().getName().replace(/\s/g, ''))}  
                >
                    <Text style={style.text}>Lancer la partie</Text>
                </Pressable>
                <Image
                    style={style.imageGameMulti}
                    source={{uri: MANAGER_MATCH.getCurrentMatch()?.getGame().getImageSource()}}
                />
            </View>
        );
    }
}
