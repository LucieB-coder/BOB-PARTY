import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert, Pressable, Image, FlatList} from 'react-native'
import React from 'react';
import { Game } from '../core/game';
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { GameComponent } from '../components/GameComponent';
import { Conversation } from '../core/conversation';
import { ScreenIndicator } from '../components/ScreenIndicator';
import stylesScreen from './style/screens.style'
import { MANAGER_GAME } from '../../appManagers';
let tabConv:Conversation[]=[];


function GameChoice(props: { navigation: any}) {
    const { navigation} = props
    
    return (
      <View style={stylesScreen.container}>
      <TopBar
        nav={navigation}
      />
      <View style={stylesScreen.bodyStart}>
        <ScreenIndicator title='Game Choice'/>
        <FlatList 
          data={MANAGER_GAME.getTabGame()}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around"}}
          keyExtractor={item =>item.getName()}
          renderItem={({item}) => <GameComponent game={item} nav={navigation}/>} />
      </View>
      <BotBar 
          nav={navigation}
          state='Home'
      />
    </View>
  );
}


function Button(props: { onPress: any; title?: any | undefined; }) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '70%',
    },
    
    container: {
    flex: 1,
    backgroundColor: "#45444E",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '100%',
    marginTop: '10%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#0085FF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  header: {
    flex : 0.15,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#2D2C33',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titre: {
    flex: 0.7,
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  engrenage: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  
  footer: {
    flex: 0.15,
    flexDirection: 'row',
    backgroundColor: '#2D2C33',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconFooter: {
    marginBottom: 25,
    marginTop: 10,
    width: 65,
    height: 50,
  },
  iconStore: {
    marginBottom: 25,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 8,
    width: 50,
    height: 50,
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

export default GameChoice