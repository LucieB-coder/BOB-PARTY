import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { FlatList } from 'react-native-gesture-handler';
import { SkinComponent } from '../components/Skin';
import { ElementAffichage } from '../components/Element';


const skinTest = new Skin("Bob",require('../../assets/BobsSkins/BobClassic.png'));
const skinBleu = new Skin("Bob Bleu", require('../../assets/BobsSkins/BobBlue.png'))
const skinBW = new Skin("Bob BW", require('../../assets/BobsSkins/BobBW.png'))
const skinGreen = new Skin("Bob Vert", require('../../assets/BobsSkins/BobGreen.png'))
const skinPT = new Skin("Bob R&T", require('../../assets/BobsSkins/BobPinkTurquoise.png'))

let listSkin: Array<Skin> = [skinTest, skinBleu, skinBW, skinGreen, skinPT]



function Store(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
      <TopBar
        skin={skinTest}
        nav={navigation}
      />
      <View style={styles.body}>
        <FlatList 
          data={listSkin}
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

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  imageSkin : {
    borderRadius: 15,
    marginTop: 15,
    marginRight: 15,
    width: 100,
    height: 100,
  },
  nomSkin :{
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});

export default Store