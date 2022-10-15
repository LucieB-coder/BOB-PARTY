import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert, Pressable, Image, ImageSourcePropType} from 'react-native'
import React, { Children } from 'react';
import { SkinComponent } from '../components/skinAvatar';
import { User } from '../core/user';
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { Conversation } from '../core/conversation';
import { ButtonGameChoice } from '../components/ButtonGameChoice';



const avatar = require('../../assets/Icons/BobClassic.png');

let test:ImageSourcePropType;
const test2:string="('../../assets/Icons/BobClassic.png')";

test = test2 as ImageSourcePropType;

let tabSkin:Skin[];
const skinTest= new Skin("Bob",require('../../assets/Icons/BobClassic.png'));
const skinTest2= new Skin("wesh",require('../../assets/BobsSkins/BobBlue.png'));
tabSkin=[skinTest];
tabSkin.push(skinTest2);
let tabConv:Conversation[]=[];
const UserActu=new User("14", "leBg", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, skinTest, tabSkin, tabConv);

function Home(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={styles.container}>
      <TopBar
        skin={skinTest} 
        nav={navigation}
      />
      <View style={styles.body}>
        <ButtonGameChoice
        title='Jouer Seul'
        onPress={() => navigation.navigate('GameChoice')}
        />
        <ButtonGameChoice
        title='Défier mes amis'
        onPress={() => navigation.navigate('GameChoice')}
        />
      </View>
      <BotBar 
        nav={navigation}
        state='Home'
      />
    </View>
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
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
});

export default Home