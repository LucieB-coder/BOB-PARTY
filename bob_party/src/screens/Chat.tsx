import { StatusBar } from 'expo-status-bar'
import {Pressable, View, Image} from 'react-native'
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
import styles from '../components/style/TopBar.style';


function Chat(props: { navigation: any; }) {
    const { navigation } = props
    const add = require('../../assets/Icons/UnSelected/Add.png');
    
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
      <Pressable onPress={() => navigation.navigate('AddConversation')} style={{alignItems:"center", alignContent:"center"}}>
          <Image source={add} style={styles.icon}/>
      </Pressable>
      
      <BotBar 
          nav={navigation}
          state='Chat'
      />
    </View>
  );
}

export default Chat