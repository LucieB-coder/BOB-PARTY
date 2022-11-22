import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { SkinComponent } from '../components/Skin';
import tabSkinApp from '../constSkin';
import { ScreenIndicator } from '../components/ScreenIndicator';



function SkinList(props: { navigation: any; }) {
    const { navigation } = props


    return (
    <View style={stylesScreen.container}>
        <TopBar
          nav={navigation}
          />
      <View style={stylesScreen.bodyStart}>
        <ScreenIndicator title='Mes Skins'/>
        <FlatList 
          data={tabSkinApp}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around"}}
          keyExtractor={item =>item.getSkinName()}
          renderItem={({item}) => <SkinComponent skin={item} state='liste'/>} />
      </View>
      <BotBar
          nav={navigation}
      />
    </View>
  );
}

export default SkinList