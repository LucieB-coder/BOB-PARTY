import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';


function Store(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
      <TopBar
          nav={navigation}
          state='settings'
        />
      <View style={stylesScreen.bodyStart}>
        <Text>couille</Text>
      </View>
    </View>
  );
}


export default Store