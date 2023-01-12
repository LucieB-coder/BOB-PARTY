import { StatusBar } from 'expo-status-bar'
import {View, FlatList, Text, Alert, NativeSyntheticEvent, TextInputSubmitEditingEventData} from 'react-native'
import React, { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { GameComponent } from '../components/GameComponent';
import { ScreenIndicator } from '../components/ScreenIndicator';
import { TextInput } from 'react-native-gesture-handler';
import stylesScreen from './style/screens.style'
import styles from './style/GameChoice.style'
import { MANAGER_GAME, MANAGER_MATCH, MANAGER_USER } from '../../appManagers';
import { GameList } from '../components/GameList';
import { useMatchStore } from '../context/matchContext';
import { socket } from '../../socketConfig';

function GameChoice(props: { navigation: any}) {
    const { navigation} = props

    const [matchId, setMatchId] = useState('');

    const setMatch = useMatchStore((state) => state.setMatch);


    async function joinMatch(id:NativeSyntheticEvent<TextInputSubmitEditingEventData>){
      const newId = parseInt(id.nativeEvent.text);
      const tmp=MANAGER_USER.getCurrentUser();
      if (tmp !== null){
        await MANAGER_MATCH.getsaverMatch().joinMatch(tmp, newId).then((res) =>{
          if (res===null){
            Alert.alert("L'id du match n'existe pas ou un jeu est déjà lancé ou il y a trop de joueurs");//changer ça avec d'autre codes de retour
          }
          else{
            MANAGER_MATCH.setCurrentMatch(res);
            setMatch(res);
            socket.emit("joinMatch", res);
            navigation.navigate("GameSolo");
          }
        });
      }
    }

    
    if(MANAGER_GAME.currentGameType === "solo" ){
      return (
        <View style={stylesScreen.container}>
        <TopBar
          nav={navigation}
        />
        <View style={stylesScreen.bodyStart}>
          <ScreenIndicator title='Game Choice'/>
          <GameList
            nav={navigation}
          />
        </View>
        <BotBar 
            nav={navigation}
            state='Home'
        />
      </View>
    );
    }
    else if(MANAGER_GAME.currentGameType === "multi"){
        return (
          <View style={stylesScreen.container}>
          <TopBar
            nav={navigation}
          />
          <View style={stylesScreen.bodyStart}>
            <ScreenIndicator title='Game Choice'/>
            <View style={{backgroundColor: '#2D2C33', flexDirection: 'row', alignContent: 'flex-start', margin: '2%', borderRadius: 15, marginTop: 20}}>
              <Text style={styles.text}>Rejoindre un match</Text>
              <TextInput 
                style={styles.textInput} 
                placeholder='Id' 
                onChangeText={(val) => setMatchId(val)} 
                onSubmitEditing={(val) => {joinMatch(val)}} 
                autoCapitalize='none'
                returnKeyType="send"
               />
            </View>
            <GameList
              nav={navigation}
            />
            
          </View>
          <BotBar 
              nav={navigation}
              state='Home'
          />
        </View>
      );
    }
    
}
export default GameChoice