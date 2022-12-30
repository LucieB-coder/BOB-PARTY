import { StatusBar } from 'expo-status-bar'
import {View} from 'react-native'
import React, { useCallback } from 'react';
import stylesScreen from './style/screens.style';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { ConversationPreviewComponent } from '../components/ConversationPreviewComponent';
import { useConversationStore } from '../context/conversationContext';
import { io } from 'socket.io-client';
import { socket } from '../../socketConfig';
import { MANAGER_CONVERSATION, MANAGER_USER } from '../../appManagers';
import { Message } from '../core/message';

function Chat(props: { navigation: any; }) {
    const { navigation } = props
    
    return (  
    <View style={stylesScreen.container}>
      <TopBar
          nav={navigation}
          />
      <View style={stylesScreen.bodyStart}>

        <FlatList 
          data={useConversationStore().tabConv}
          renderItem={({item}) => <ConversationPreviewComponent conv={item} navigation={navigation}/>} 
        />
      </View>
      <BotBar 
          nav={navigation}
          state='Chat'
      />
    </View>
  );
}

export default Chat