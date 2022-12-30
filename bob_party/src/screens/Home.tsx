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




let tabConv: Conversation[] = [];

function Home(props: { navigation: any; }) {

  const { navigation } = props


  const setTabConv = useConversationStore((state) => state.setTabConv);
  const setCurrentConv = useConversationStore((state) => state.setCurrentConv);


  //It has to be in the home page that way the database will reload the conversations when the user receive a message een if he is in another page

  socket.on("messageReceived", async () =>{
    console.log("Message reçu");
    await handleConversationLoad();
  });    

  async function handleConversationLoad(){
    const tmp = MANAGER_USER.getCurrentUser();
    if (tmp !== null) {
        await MANAGER_CONVERSATION.getLoaderConversation().loadByUser(tmp).then((res) => {
            const tmp=MANAGER_USER.getCurrentUser()
            MANAGER_CONVERSATION.setTabConv(res);
            if (tmp!==null){
              const tmpConv=MANAGER_CONVERSATION.getCurrentConv();
              if (tmpConv!==null){
                const trouveIndex = (element: Conversation) => element.getId()===tmpConv.getId();
                const index=MANAGER_CONVERSATION.getTabConv().findIndex(trouveIndex);
                MANAGER_CONVERSATION.setCurrentConv(MANAGER_CONVERSATION.getTabConv()[index]);
                setCurrentConv(MANAGER_CONVERSATION.getCurrentConv());
              }
              setTabConv(MANAGER_CONVERSATION.getTabConv());
            }
        });
    }
  }

  return (
    <View style={stylesScreen.container}>
      <TopBar
        nav={navigation}
        state='Home'
      />
      <View style={stylesScreen.bodyCenter}>
        <ButtonGameTypeChoice
          title='Jouer Seul'
          onPress={() => { navigation.navigate('GameChoiceTab') }}
        />
        <ButtonGameTypeChoice
          title='Défier mes amis'
          onPress={() => navigation.navigate('GameChoiceTab')}
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