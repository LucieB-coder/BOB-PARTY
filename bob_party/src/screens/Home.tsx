import { StatusBar } from 'expo-status-bar'
import { View} from 'react-native'
import React, { useCallback } from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import { MANAGER_GAME } from '../../App';
import { useGameStore } from '../context/gameContext';



let tabConv:Conversation[]=[];

function Home(props: { navigation: any; }) {

    const { navigation } = props

    const setTabGame = useGameStore((state) => state.setTabGame);

    const handleGame = useCallback(async () => {
      let tmp=MANAGER_GAME.getTabGame();
      if (tmp==null){
        await MANAGER_GAME.getLoaderGame().loadAllGame().then((res) => {      
          MANAGER_GAME.setTabGame(res);
          setTabGame(res);
          navigation.navigate('GameChoiceTab')
        });
      }
      else{
        navigation.navigate('GameChoiceTab')
      }
  }, []);

    return ( 
        <View style={stylesScreen.container}>
            <TopBar
                nav={navigation}
                state= 'Home'
            />
            <View style={stylesScreen.bodyCenter}>
            <ButtonGameTypeChoice
                title='Jouer Seul'
                onPress={() => {handleGame()}}
            />
            <ButtonGameTypeChoice
                title='Défier mes amis'
                onPress={() => handleGame()}
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