import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style';
import styles from './style/Settings.style';
import { TopBar } from '../components/TopBar';
import { User } from '../core/user';

import tabSkinApp from '../constSkin';
import tabConv from '../constCov';
import { ButtonGreySmall } from '../components/ButtonGreySmall';
import { title } from 'process';
import { info } from 'console';


const UserActu=new User("14", "leBg", "MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12,  tabSkinApp[0], tabSkinApp, tabConv);


function Store(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
      <TopBar
          nav={navigation}
          state='settings'
        />
      <View style={stylesScreen.bodyStartCenter}>
        <Text style={styles.title}>Informations du Joueur</Text>
        <View style={styles.infoView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <View>
              <View>
                <Text style={styles.text}>Pseudo: {UserActu.getUsername()}</Text>
                <ButtonGreySmall onPress={UserActu.setUsername} title='Changer le pseudo'/>
              </View>
              <View>
                <Text style={styles.text}>Mot de passe: {UserActu.getPassword()}</Text>
                <ButtonGreySmall onPress={() => console.log('changer mdp')} title='Changer le mot de passe'/>
              </View>
              <View>
                <Text style={styles.text}>Nationalité: {UserActu.getNationality()}</Text>
                <ButtonGreySmall onPress={() => console.log('changer nat')} title='Changer la nationnalité'/>
              </View>
              <View>
                <Text style={styles.text}>Sexe: {UserActu.getSexe()}</Text>
                <ButtonGreySmall onPress={() => console.log('changer sexe')} title='Changer le sexe'/>
              </View>
            </View>
            <Text style={styles.textID}>ID: {UserActu.getId()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Store