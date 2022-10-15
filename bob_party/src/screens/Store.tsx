import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert, Pressable, Image} from 'react-native'
import React, { Children } from 'react';
import { SkinComponent } from '../components/skinAvatar';
import { User } from '../core/user';
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { ElementAffichage } from '../components/Element';


const skinTest= new Skin("Bob",require('../../assets/Icons/BobClassic.png'));
const engrenage = require('../../assets/Icons/UnSelected/Cogs.png');
const gamepad = require('../../assets/Icons/UnSelected/Gamepad.png');
const message = require('../../assets/Icons/UnSelected/Chat.png');
const store = require('../../assets/Icons/Selected/SStore.png');

function Store(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={styles.container}>
      <TopBar
        skin={skinTest}
        nav={navigation}
      />
      <View style={styles.body}>
        <ElementAffichage
          element={skinTest}
          styleImage={styles.imageSkin}
          styleTitle={styles.nomSkin}
          nav={navigation}
        />
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