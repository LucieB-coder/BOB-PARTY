import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ImageSourcePropType} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { User } from '../core/user';
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import tabSkinApp from '../constSkin';
import { GameSolo } from '../core/gameSolo';



//const test= new GameSolo("test", require('bob_party/assets/ImagesJeux/BatailleNavale.jpeg'), "test", );
let tabConv:Conversation[]=[];
const UserActu=new User("14", "leBg", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12,  tabSkinApp[0], tabSkinApp, tabConv);

function Home(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
      <TopBar
        skin={UserActu.getCurrentSkin()} 
        nav={navigation}
        state= 'Home'
      />
      <View style={stylesScreen.bodyCenter}>
        <ButtonGameTypeChoice
        title='Jouer Seul'
        onPress={() => navigation.navigate('GameChoice')}
        />
        <ButtonGameTypeChoice
        title='Défier mes amis'
        onPress={() => navigation.navigate('GameChoice')}
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