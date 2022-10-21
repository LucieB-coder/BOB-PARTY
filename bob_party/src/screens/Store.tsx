import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { SkinComponent } from '../components/Skin';
import { ScreenIndicator } from '../components/ScreenIndicator';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Store(props: { navigation: any; }) {
  const { navigation } = props

  const currentUser = useSelector((state: RootState) => state.currentUser.value[0]);

  return (
    <View style={stylesScreen.container}>
      <TopBar
        nav={navigation}
      />
      <View style={stylesScreen.bodyStart}>
        <ScreenIndicator title='Store'/>
        <FlatList 
          data={currentUser.getTabSkin()}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around"}}
          keyExtractor={item =>item.getSkinName()}
          renderItem={({item}) => <SkinComponent skin={item} state='shop'/>} />
      </View>
      <BotBar 
          nav={navigation}
          state='Store'
      />
    </View>
  );
}

export default Store