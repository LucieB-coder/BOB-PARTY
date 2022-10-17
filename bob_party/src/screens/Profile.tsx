import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Image} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import styles from './style/Profile.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { SkinComponent } from '../components/Skin';
import { User } from '../core/user';
import tabSkinApp from '../constSkin';
import tabConv from '../constCov'
import { ButtonChangeSkin } from '../components/ButtonChangeSkin';
import { ScreenIndicator } from '../components/ScreenIndicator';

const coin = require('../../assets/Icons/Coin.png')

const UserActu=new User("14", "leBg","MdpDeOuf", "ouioui", "grand", new Date(2022,12,12), 12222, 123324, 12, tabSkinApp[0], tabSkinApp, tabConv);

function Profile(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
        <TopBar
          skin={UserActu.getCurrentSkin()} 
          nav={navigation}
          />
      <View style={stylesScreen.bodyStart}>
        <ScreenIndicator title='Profil'/>
        <View style={styles.coinSkinView}>
            <View style={styles.coinView}>
                <Image 
                    style={styles.coin}
                    source={coin}
                />
                <Text style={styles.coinText}>{UserActu.getCurrentCoins()}</Text>
            </View>
            <View style={styles.skinView}>
                <SkinComponent skin={UserActu.getCurrentSkin()} state='profile'/>
                <ButtonChangeSkin onPress={() => navigation.navigate('SkinList')}/>
            </View>
        </View>
        <View style={styles.infoView}>
            <Text style={styles.infoText}>Total de BobCoin gagnés: {UserActu.getTotalCoins()}</Text>
        </View>
      </View>
      <BotBar
          nav={navigation}
      />
    </View>
  );
}


export default Profile