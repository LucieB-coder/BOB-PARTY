import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert, Pressable, Image} from 'react-native'
import React from 'react';
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';

const avatar = require('../../assets/Icons/BobClassic.png');
const skinTest= new Skin("Bob",require('../../assets/Icons/BobClassic.png'));
const engrenage = require('../../assets/Icons/UnSelected/Cogs.png');
const gamepad = require('../../assets/Icons/UnSelected/Gamepad.png');
const message = require('../../assets/Icons/Selected/SChat.png');
const store = require('../../assets/Icons/UnSelected/Store.png');

function Chat(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={styles.container}>
      <TopBar
          skin={skinTest} 
          styleAvatar={styles.avatar} 
          title="BOB PARTY" 
          rightIcon={engrenage} 
          styleIcon={styles.engrenage} 
          nav={navigation} styleTitle={styles.titre} styleHeader={styles.header}
        />
      <View style={styles.body}>
        <Text style={styles.text}>couille</Text>
      </View>
      <View style={styles.footer}>
        <Pressable>
          <Image
          style={styles.iconFooter}
          source={message}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('HomeTab')}>
          <Image
          style={styles.iconFooter}
          source={gamepad}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('StoreTab')}>
          <Image
          style={styles.iconStore}
          source={store}
          />
        </Pressable>
      </View>
    </View>
  );
}


function Button(props: { onPress: any; title?: "Save" | undefined; }) {
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

export default Chat