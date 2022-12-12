import MainTabNavigator from './src/navigation/AppNavigator'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import LoaderUserApi from './src/services/userServices/loaderUserApi'
import ManagerUser from './src/services/userServices/managerUser'
import FakeSaverUser from './src/services/userServices/fakeSaverUser'
import React, { useCallback } from 'react';
import ManagerConversation from './src/services/conversationService/managerConversation'
import { LoaderConversationApi } from './src/services/conversationService/loaderConversationApi'
import { FakeSaverConversation } from './src/services/conversationService/fakeSaverConversation'
import ManagerMatch from './src/services/matchServices/managerMatch'
import LoaderMatchApi from './src/services/matchServices/loaderMatchApi'
import SaverMatchApi from './src/services/matchServices/saverMatchApi'
import LoaderGameApi from './src/services/gameService/loaderGameApi'
import ManagerGame from './src/services/gameService/managerGame'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native'


export const MANAGER_USER = new ManagerUser(new LoaderUserApi, new FakeSaverUser);
export const MANAGER_CONVERSATION = new ManagerConversation(new LoaderConversationApi, new FakeSaverConversation);
export const MANAGER_MATCH = new ManagerMatch(new LoaderMatchApi, new SaverMatchApi);
export const MANAGER_GAME = new ManagerGame(new LoaderGameApi);


export default function App() {

  const [fontsLoaded] = useFonts({
    'Helvetica': require('./assets/fonts/Helvetica.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
      <Provider store={store} >
        <MainTabNavigator />
      </Provider>
  );
}


