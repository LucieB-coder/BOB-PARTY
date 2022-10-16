import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { SkinComponent } from '../components/Skin';
import tabSkinApp from '../constSkin';


function Profile(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
        <TopBar
          skin={tabSkinApp[0]} 
          nav={navigation}
          />
      <View style={styles.body}>
        <FlatList 
          data={tabSkinApp}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around"}}
          keyExtractor={item =>item.getSkinName()}
          renderItem={({item}) => <SkinComponent skin={item} state='profile'/>} />
      </View>
      <BotBar
          nav={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
  },
});

export default Profile