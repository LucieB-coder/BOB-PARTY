import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { ScreenIndicator } from '../components/ScreenIndicator';
import { User } from '../core/user';
import { FlatList } from 'react-native-gesture-handler';
import { ConversationComponent } from '../components/ConversationComponent';

import tabSkinApp from '../constSkin';
import tabConv from '../constCov';


const UserActu=new User("14", "leBg", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12,  tabSkinApp[0], tabSkinApp, tabConv);

function Chat(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
      <TopBar
          skin={UserActu.getCurrentSkin()}
          nav={navigation}
          />
      <View style={stylesScreen.bodyStart}>
        <FlatList 
          data={tabConv}
          renderItem={({item}) => <ConversationComponent conv={item} state='Preview'/>} 
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