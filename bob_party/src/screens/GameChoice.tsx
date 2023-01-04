import { StatusBar } from 'expo-status-bar'
import {View, FlatList} from 'react-native'
import React from 'react';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { GameComponent } from '../components/GameComponent';
import { ScreenIndicator } from '../components/ScreenIndicator';
import stylesScreen from './style/screens.style'
import { MANAGER_GAME } from '../../appManagers';
import { GameList } from '../components/GameList';

function GameChoice(props: { navigation: any}) {
    const { navigation} = props
    
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
export default GameChoice