import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert, Pressable, Image} from 'react-native'
import React, { Children } from 'react';
import { SkinComponent } from '../components/skinAvatar';
import { User } from '../core/user';
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';



const avatar = require('../../assets/Icons/BobClassic.png');
let tabSkin:Skin[];
const skinTest= new Skin("Bob",require('../../assets/Icons/BobClassic.png'));
const skinTest2= new Skin("wesh",require('../../assets/BobsSkins/BobBlue.png'));
tabSkin=[skinTest];
tabSkin.push(skinTest2);
const UserActu=new User("14", "leBg", "ouioui", "grand", "la", 12222, 123324, skinTest, tabSkin);
const engrenage = require('../../assets/Icons/UnSelected/Cogs.png');
const gamepad = require('../../assets/Icons/Selected/SGamepad.png');
const message = require('../../assets/Icons/UnSelected/Chat.png');
const store = require('../../assets/Icons/UnSelected/Store.png');


function Home(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={styles.container}>
        <TopBar
          skin={skinTest} 
          styleAvatar={styles.avatar} 
          title="BOB PARTY" 
          rightIcon={engrenage} 
          styleIcon={styles.engrenage} 
          nav={navigation} 
          styleTitle={styles.titre} 
          styleHeader={styles.header}
        />
      <View style={styles.body}>
        <Button 
        title='Jouer Seul'
        onPress={() => navigation.navigate('GameChoice')}
        />
        <Button 
        title='Défier mes amis'
        onPress={() => navigation.navigate('GameChoice')}
        />
      </View>
      <BotBar 
          messages={message}
          games={gamepad}
          shop={store}
          style={styles.iconFooter}
          styleStore={styles.iconStore}
          nav={navigation}
          styleBar={styles.footer}
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
  container: {
    flex: 1,
    backgroundColor: '#45444E',
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
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
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
    marginBot: 25,
    marginTop: 10,
    width: 65,
    height: 50,
  },
  iconStore: {
    marginBot: 25,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 8,
    width: 50,
    height: 50,
  },

});

export default Home