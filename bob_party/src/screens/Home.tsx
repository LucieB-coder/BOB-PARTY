import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import React, { useCallback } from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import { useGameStore } from '../context/gameContext';
import { MANAGER_CONVERSATION, MANAGER_GAME, MANAGER_USER } from '../../appManagers';
import { socket } from '../../socketConfig';
import { useConversationStore } from '../context/conversationContext';
import { Message } from '../core/message';
import ManagerUser from '../services/userServices/managerUser';




let tabConv: Conversation[] = [];

function Home(props: { navigation: any; }) {

  const { navigation } = props



  //It has to be in the home page that way the database will reload the conversations when the user receive a message een if he is in another page



  return (
    <View style={stylesScreen.container}>
      <TopBar
        nav={navigation}
        state='Home'
      />
      <View style={stylesScreen.bodyCenter}>
        <ButtonGameTypeChoice
          title='Jouer Seul'
          onPress={() => { MANAGER_GAME.currentGameType="solo";navigation.navigate('GameChoiceTab') }}
        />
        <ButtonGameTypeChoice
          title='Défier mes amis'
          onPress={() => { MANAGER_GAME.currentGameType="multi" ; navigation.navigate('GameChoiceTab')}}
        />
      </View>
      <BotBar
        nav={navigation}
        state='Home'
      />
    </View>
  );
}

export default Home