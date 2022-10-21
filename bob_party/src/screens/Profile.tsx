import { StatusBar } from 'expo-status-bar'
import { View, Text, Image} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import styles from './style/Profile.style'
import { TopBar } from '../components/TopBar';
import { BotBar } from '../components/BotBar';
import { SkinComponent } from '../components/Skin';
import { ButtonGreySmall } from '../components/ButtonGreySmall';
import { ScreenIndicator } from '../components/ScreenIndicator';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const coin = require('../../assets/Icons/Coin.png')



function Profile(props: { navigation: any; }) {
    const { navigation } = props

    const currentUser = useSelector((state: RootState) => state.currentUser.value)[0];

    return (
    <View style={stylesScreen.container}>
        <TopBar
          skin={currentUser.getCurrentSkin()} 
          nav={navigation}
          />
      <View style={stylesScreen.bodyStart}>
        <ScreenIndicator title='Profil'/>
        <Text style={styles.pseudoText}>{currentUser.getUsername()}</Text>
        <View style={styles.coinSkinView}>
            <View style={styles.coinView}>
                <Image 
                    style={styles.coin}
                    source={coin}
                />
                <Text style={styles.coinText}>{currentUser.getCurrentCoins()}</Text>
            </View>
            <View style={styles.skinView}>
                <SkinComponent skin={currentUser.getCurrentSkin()} state='profile' nav={navigation} />
                <ButtonGreySmall onPress={() => navigation.navigate('SkinList')} title='Changer de skin' state='Profile'/>
            </View>
        </View>
        <View style={styles.infoView}>
            <Text style={styles.infoText}>Total de BobCoin gagnés: {currentUser.getTotalCoins()}</Text>
        </View>
      </View>
      <BotBar
          nav={navigation}
      />
    </View>
  );
}


export default Profile