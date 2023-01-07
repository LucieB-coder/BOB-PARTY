import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import React, { useCallback } from 'react';
import stylesScreen from './style/screens.style';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { SkinComponent } from '../components/SkinComponent';
import { ScreenIndicator } from '../components/ScreenIndicator';
import { useSkinStore } from '../context/storeContext';



function Store(props: { navigation: any; }) {
  const { navigation } = props
    
  return (
    <View style={stylesScreen.container}>
      <TopBar
        nav={navigation}
      />
      <View style={stylesScreen.bodyStart}>
        <ScreenIndicator title='Store'/>
        <FlatList 
          data={useSkinStore().tabSkin}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around"}}
          keyExtractor={item =>item.getSkinName()}
          renderItem={({item}) => <SkinComponent skin={item} state='shop' nav={navigation}/>} />
      </View>
      <BotBar 
          nav={navigation}
          state='Store'
      />
    </View>
  );
}

export default Store