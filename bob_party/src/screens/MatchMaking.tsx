import { StatusBar } from 'expo-status-bar'
import { View, Image, Text, Button} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style';
import styles from './style/Settings.style';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import { useMatchStore } from '../context/matchContext';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { PlayerBox } from '../components/PlayerBox';


function MatchMaking(props: { navigation: any; }) {

    const { navigation } = props

    const match = useMatchStore().match;

    return ( 
        <View style={stylesScreen.container}>
            <TopBar
            nav={navigation}
            state='matchmacking'
            />
            <FlatList 
                data={match?.getTabUsers()} 
                keyExtractor={usr =>usr.getUsername()}
                renderItem={({item}) => <PlayerBox user={item}/>}
            />
            <View style={stylesScreen.bodyCenter}>
            <Button
                title='Lancer la partie'
                onPress={() => navigation.navigate(match?.getGame().getName().replace(/\s/g, ''))}
            />
            </View>

            <Image
                    style={{width:100, height:100}}
                    source={{uri: match?.getGame().getImageSource()}}
                />
        </View>
    );
}

export default MatchMaking