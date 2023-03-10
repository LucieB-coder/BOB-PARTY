import React, { Component, useCallback, useEffect, useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
  Image,
  TouchableHighlight,
  Alert,
  ImageBackground,
} from 'react-native'
import { MANAGER_MATCH, MANAGER_USER } from '../../../appManagers';
import { useMatchStore } from '../../context/matchContext';
import { useUserStore } from '../../context/userContext';
import { Match } from '../../core/Match/match';
import { User } from '../../core/User/user';


let points = 0;

function CookieClicker(props: { navigation: any }) {
  const { navigation } = props

  const GAMING_TIME = 120;

  const setUser = useUserStore((state) => state.setUser);

  const resetMatch = useMatchStore((state) => state.resetMatch);

  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(0);
  const [clickSpeed, setClickSpeed] = useState(1);
  const [grandmaCost, setGrandmaCost] = useState(10);
  const [farmCost, setFarmCost] = useState(250);
  const [factoryCost, setFactoryCost] = useState(2000);
  const [wizardCost, setWizardCost] = useState(25000);
  const [portalCost, setPortalCost] = useState(200000);

  const [timer, setTimer] = useState(GAMING_TIME);


  function onPressCookie() {
    setMoney(money + clickSpeed);
    setCount(count + clickSpeed);
    points = count + clickSpeed;
  }

  function onPressGrandma() {
    if (money >= grandmaCost) {
      setMoney(money - grandmaCost);
      setClickSpeed(clickSpeed + 1);
      setGrandmaCost(grandmaCost + 10);
    }
  }

  function onPressFarm() {
    if (money >= farmCost) {
      setMoney(money - farmCost);
      setClickSpeed(clickSpeed + 25);
      setFarmCost(farmCost + 250);
    }
  }

  function onPressFactory() {
    if (money >= factoryCost) {
      setMoney(money - factoryCost);
      setClickSpeed(clickSpeed + 200);
      setFactoryCost(factoryCost + 2000);
    }
  }

  function onPressWizard() {
    if (money >= wizardCost) {
      setMoney(money - wizardCost);
      setClickSpeed(clickSpeed + 2500);
      setWizardCost(wizardCost + 25000);
    }
  }

  function onPressPortal() {
    if (money >= portalCost) {
      setMoney(money - portalCost);
      setClickSpeed(clickSpeed + 20000);
      setPortalCost(portalCost + 200000);
    }
  }

  function endGame() {
    const tmp = MANAGER_USER.getCurrentUser();
    if (tmp !== null) {
      if (MANAGER_MATCH.getCurrentMatch()?.getTabUsers().includes(tmp)) {
        MANAGER_MATCH.getCurrentMatch()?.updatePostMatch(tmp, points);
        setUser(tmp);
      }
    }
    resetMatch();
  }

  useEffect(() => {
    let counter = GAMING_TIME;
    var oneSecInterval = setInterval(() => {
      setTimer(timer => timer - 1);
      counter--;

      if (counter == 0) {
        clearInterval(oneSecInterval);
        endGame();
        Alert.alert("fin du jeu");
        navigation.navigate('Home');
      }
    }, 1000);
  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: "https://i0.wp.com/lesfoliesdejenny.fr/wp-content/uploads/2021/12/5.png?w=1080&ssl=1" }} resizeMode="cover" style={styles.image}>
        <View style={styles.containerTop}>
          <Text style={styles.cout}>
            Timer: {timer}
          </Text>
          <TouchableHighlight onPress={onPressCookie} >
            <Image style={styles.photo} source={{ uri: 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/Persistance/bob_party/assets/ImagesJeux/CookieClicker/ChristmasCookie.png' }} />
          </TouchableHighlight>
          <Text style={styles.cout}>
            Argent {money}
          </Text>
          <Text style={styles.cout}>
            Points {count}
          </Text>
        
        <View style={styles.containerRight}>
          <TouchableHighlight onPress={onPressGrandma}>
            <Image style={styles.photo} source={{ uri: 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/Persistance/bob_party/assets/ImagesJeux/CookieClicker/ChristmasGrandma.png' }} />
          </TouchableHighlight>
          <View>
            <Text style={styles.cout}>
              Cost {grandmaCost}
            </Text>
          </View>

          <TouchableHighlight onPress={onPressFarm} style={styles.photo}>
            <Image style={styles.photo} source={{ uri: 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/Persistance/bob_party/assets/ImagesJeux/CookieClicker/ChristmasFarm.png' }} />
          </TouchableHighlight>
          <View>
            <Text style={styles.cout}>
              Cost {farmCost}
            </Text>
          </View>

          <TouchableHighlight onPress={onPressFactory}>
            <Image style={styles.photo} source={{ uri: 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/Persistance/bob_party/assets/ImagesJeux/CookieClicker/ChristmasFactory.png' }} />
          </TouchableHighlight>
          <View>
            <Text style={styles.cout}>
              Cost {factoryCost}
            </Text>
          </View>

          <TouchableHighlight onPress={onPressWizard}>
            <Image style={styles.photo} source={{ uri: 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/Persistance/bob_party/assets/ImagesJeux/CookieClicker/ChristmasTower.png' }} />
          </TouchableHighlight>
          <View>
            <Text style={styles.cout}>
              Cost {wizardCost}
            </Text>
          </View>

          <TouchableHighlight onPress={onPressPortal}>
            <Image style={styles.photo} source={{ uri: 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/Persistance/bob_party/assets/ImagesJeux/CookieClicker/ChristmasPortal.png' }} />
          </TouchableHighlight>
          <View>
            <Text style={styles.cout}>
              Cost {portalCost}
            </Text>
          </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: window.innerHeight,
    width: window.innerWidth,
    flex: 1,
  },
  containerTop:{
    top: "5%",
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRight: {
    flex: 1,
    flexWrap: "wrap",
    marginBottom: 20,
    left: 100,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#FFDDFF',
    padding: 10,
    marginBottom: 10
  },
  photo: {
    width: 75,
    height: 75
  },
  cout: {
    marginBottom: 20,
    color: "white",
    fontSize: 15
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

})

export default CookieClicker;