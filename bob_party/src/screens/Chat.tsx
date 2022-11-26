import { StatusBar } from 'expo-status-bar'
import {View} from 'react-native'
import React, { useCallback } from 'react';
import stylesScreen from './style/screens.style';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { ConversationComponent } from '../components/ConversationComponent';
import { Conversation } from '../core/conversation';
import { MANAGER_CONVERSATION, MANAGER_USER } from '../../App';
import { useConversationStore } from '../context/conversationContext';

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
          renderItem={({item}) => <ConversationComponent conv={item} state='Preview' navigation={navigation}/>} 
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