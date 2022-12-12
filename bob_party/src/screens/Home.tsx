import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import React, { useCallback } from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import { MANAGER_GAME } from '../../App';
import { useGameStore } from '../context/gameContext';
import { GameSolo } from '../core/gameSolo';
import { Game } from '../core/game';
import game from '../testGameSolo';



let tabConv: Conversation[] = [];

function Home(props: { navigation: any; }) {

  const { navigation } = props

  const setTabGame = useGameStore((state) => state.setTabGame);
  const setTabGameSolo = useGameStore((state) => state.setTabGameSolo);
  const setTabGameMulti = useGameStore((state) => state.setTabGameMulti);

  /*
      const handleGame = useCallback(async (typeJeu: string) => {
        switch(typeJeu){
          case 'solo':
            let tabSolo:Game[]=[]
            let tmp=MANAGER_GAME.getTabGameSolo();
            if (tmp==null){
              let tabAll=MANAGER_GAME.getTabGame();
                if (tabAll==null){
                  await MANAGER_GAME.getLoaderGame().loadAllGame().then((res) => {      
                    MANAGER_GAME.setTabGame(res);
                    setTabGame(res);
                  });
                }
                tabAll?.forEach(game =>{
                  if (game.getNbPlayerMax()==1){
                    tabSolo.push(game);
                  }
                })
                MANAGER_GAME.setTabGameSolo(tabSolo);
                setTabGameSolo(tabSolo);
                navigation.navigate('GameChoiceTab')
            }
            else{
              navigation.navigate('GameChoiceTab')
            }
          case 'multi':
            let tabMulti:Game[]=[]
            let tkt=MANAGER_GAME.getTabGameSolo();
            if (tkt==null){
              let tabAll=MANAGER_GAME.getTabGame();
                if (tabAll==null){
                  await MANAGER_GAME.getLoaderGame().loadAllGame().then((res) => {      
                    MANAGER_GAME.setTabGame(res);
                    setTabGame(res);
                  });
                }
                tabAll?.forEach(game =>{
                  if (game.getNbPlayerMax()==1){
                    tabSolo.push(game);
                  }
                })
                MANAGER_GAME.setTabGameMulti(tabMulti);
                setTabGameMulti(tabMulti);
                navigation.navigate('GameChoiceTab')
            }
            else{
              navigation.navigate('GameChoiceTab')
            }
  
        }
        
    }, []);
    */

  const handleGame = useCallback(async (typeJeu: string) => {

    const tmp = MANAGER_GAME.getTabGame();
    if (tmp === null) {
      await MANAGER_GAME.getLoaderGame().loadAllGame().then((res) => {
        MANAGER_GAME.setTabGame(res);
        setTabGame(res);
        navigation.navigate('GameChoiceTab')
      });
    }
    else {
      navigation.navigate('GameChoiceTab')
    }
  }, []);

  return (
    <View style={stylesScreen.container}>
      <TopBar
        nav={navigation}
        state='Home'
      />
      <View style={stylesScreen.bodyCenter}>
        <ButtonGameTypeChoice
          title='Jouer Seul'
          onPress={() => { handleGame("solo") }}
        />
        <ButtonGameTypeChoice
          title='Défier mes amis'
          onPress={() => handleGame("multi")}
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