import { StatusBar } from 'expo-status-bar'
import {View, FlatList, Text} from 'react-native'
import React, { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { GameComponent } from '../components/GameComponent';
import { ScreenIndicator } from '../components/ScreenIndicator';
import { TextInput } from 'react-native-gesture-handler';
import stylesScreen from './style/screens.style'
import styles from './style/GameChoice.style'
import { MANAGER_GAME } from '../../appManagers';
import { GameList } from '../components/GameList';

function GameChoice(props: { navigation: any}) {
    const { navigation} = props

    const [matchId, setMatchId] = useState('');
    
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
            <GameList
              nav={navigation}
            />
            <View style={{backgroundColor: '#2D2C33', flexDirection: 'row', alignContent: 'flex-start', margin: '2%', borderRadius: 15}}>
              <Text style={styles.text}>Rejoindre un match</Text>
              <TextInput style={styles.textInput} placeholder='Id' onChangeText={(val) => setMatchId(val)} autoCapitalize='none' />
            </View>
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