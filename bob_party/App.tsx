import MainTabNavigator from './src/navigation/AppNavigator'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import TicTacToeOnline from './src/Games/Tic-Tac-Toe/tic_tac_toe_online';
import BlackJack from './src/Games/BlackJack/blackJack';


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


