import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';

const skinTest= new Skin("S0001", "Bob",require('../../assets/Icons/BobClassic.png'),100);

function Chat(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
      <TopBar
          skin={skinTest}
          nav={navigation}
          />
      <View style={stylesScreen.bodyStart}>
        <Text >couille</Text>
      </View>
      <BotBar 
          nav={navigation}
          state='Chat'
      />
    </View>
  );
}

export default Chat