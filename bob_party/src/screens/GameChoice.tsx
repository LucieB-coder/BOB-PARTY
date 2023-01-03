import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert, Pressable, Image, FlatList} from 'react-native'
import React from 'react';
import { Game } from '../core/game';
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { GameComponent } from '../components/GameComponent';
import { Conversation } from '../core/conversation';
import { ScreenIndicator } from '../components/ScreenIndicator';
import stylesScreen from './style/screens.style'
import { MANAGER_GAME } from '../../appManagers';
let tabConv:Conversation[]=[];


function GameChoice(props: { navigation: any}) {
    const { navigation} = props
    
    return (
      <View style={stylesScreen.container}>
      <TopBar
        nav={navigation}
      />
      <View style={stylesScreen.bodyStart}>
        <ScreenIndicator title='Game Choice'/>
        <FlatList 
          data={MANAGER_GAME.getTabGame()}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around"}}
          keyExtractor={item =>item.getName()}
          renderItem={({item}) => <GameComponent game={item} nav={navigation}/>} />
      </View>
      <BotBar 
          nav={navigation}
          state='Home'
      />
    </View>
  );
}


export default GameChoice