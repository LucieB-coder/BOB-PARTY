import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text} from 'react-native'
import React from 'react';
import { Skin } from '../core/skin';
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';

const skinTest= new Skin("Bob",require('../../assets/Icons/BobClassic.png'));

function Profile(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={styles.container}>
        <TopBar
          skin={skinTest} 
          nav={navigation}
          />
      <View style={styles.body}>
        <Text>couille</Text>
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
});

export default Profile