import { StatusBar } from 'expo-status-bar'
import { View} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


//const test= new GameSolo("test", require('bob_party/assets/ImagesJeux/BatailleNavale.jpeg'), "test", );
let tabConv:Conversation[]=[];


function Home(props: { navigation: any; }) {
    const { navigation } = props

    const currentUser = useSelector((state: RootState) => state.currentUser.value[0]);
    
    return ( 
      <View style={stylesScreen.container}>
        <TopBar
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