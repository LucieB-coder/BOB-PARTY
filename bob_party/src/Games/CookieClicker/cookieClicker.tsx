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
} from 'react-native'
import { MANAGER_MATCH, MANAGER_USER } from '../../../App';
import { useMatchStore } from '../../context/matchContext';
import { useUserStore } from '../../context/userContext';
import { Match } from '../../core/Match/match';
import { User } from '../../core/User/user';


let points=0;

function CookieClicker(props: { navigation: any}){
  const { navigation } = props

  const GAMING_TIME=45;

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


  function onPressCookie(){
    setMoney(money+clickSpeed);
    setCount(count+clickSpeed);
    points=count+clickSpeed;
  }

  function onPressGrandma(){
    if (money>=grandmaCost){
      setMoney(money-grandmaCost);
      setClickSpeed(clickSpeed+1);
      setGrandmaCost(grandmaCost+10);
    }
  }

  function onPressFarm(){
    if (money>=farmCost){
      setMoney(money-farmCost);
      setClickSpeed(clickSpeed+25);
      setFarmCost(farmCost+250);
    }
  }

  function onPressFactory(){
    if (money>=factoryCost){
      setMoney(money-factoryCost);
      setClickSpeed(clickSpeed+200);
      setFactoryCost(factoryCost+2000);
    }
  }

  function onPressWizard(){
    if (money>=wizardCost){
      setMoney(money-wizardCost);
      setClickSpeed(clickSpeed+2500);
      setWizardCost(wizardCost+25000);
    }
  }

  function onPressPortal(){
    if (money>=portalCost){
      setMoney(money-portalCost);
      setClickSpeed(clickSpeed+20000);
      setPortalCost(portalCost+200000);
    }
  }

  function endGame(){
    let tmp: User | null;
    tmp=MANAGER_USER.getCurrentUser();
    if (tmp!=null){
      if (MANAGER_MATCH.getCurrentMatch()?.getTabUsers().includes(tmp)){
        MANAGER_MATCH.getCurrentMatch()?.updatePostMatch(tmp, points);
        setUser(tmp);   
      }
    }
    resetMatch();     
  }

  useEffect(() => {
    let counter=GAMING_TIME;
    var oneSecInterval = setInterval(() => {
      setTimer(timer => timer - 1);
      counter --;

      if (counter == 0) {
          clearInterval(oneSecInterval);
          endGame();
          Alert.alert("fin du jeu");
          navigation.navigate('Home');
      }
    }, 1000);
  },[]);


    return (
        <View style={styles.container}>
          <View >
            <Text>
              Timer: {timer}
            </Text>
            <TouchableHighlight onPress={onPressCookie} >
              <Image style={styles.photo} source={{uri: 'https://cdn-icons-png.flaticon.com/512/614/614131.png'}}/>
            </TouchableHighlight>
            <Text>
              Argent {money}
            </Text>
            <Text>
              Points {count}
            </Text>
          </View>
          <View style={styles.containerRight}>
            <TouchableHighlight onPress={onPressGrandma}>
              <Image style={styles.photo} source={{uri: 'https://www.pngall.com/wp-content/uploads/12/Grandma-Happy-PNG-Photo.png'}}/>
            </TouchableHighlight>
            <View>
              <Text style={styles.cout}>
                Cost {grandmaCost}
              </Text>
            </View>

            <TouchableHighlight onPress={onPressFarm} style={styles.photo}>
              <Image style={styles.photo} source={{uri: 'https://www.pngall.com/wp-content/uploads/8/Farming-PNG-Picture.png'}}/>
            </TouchableHighlight>
            <View>
              <Text style={styles.cout}>
                Cost {farmCost}
              </Text>
            </View>

            <TouchableHighlight onPress={onPressFactory}>
              <Image style={styles.photo} source={{uri: 'https://cdn.pixabay.com/photo/2018/04/16/09/12/factory-3323977_960_720.png'}}/>
            </TouchableHighlight>
            <View>
              <Text style={styles.cout}>
                Cost {factoryCost}
              </Text>
            </View>

            <TouchableHighlight onPress={onPressWizard}>
              <Image style={styles.photo} source={{uri: 'https://www.clasher.us/images/coc/units/Wizard_Tower7.png'}}/>
            </TouchableHighlight>
            <View>
              <Text style={styles.cout}>
                Cost {wizardCost}
              </Text>
            </View>

            <TouchableHighlight onPress={onPressPortal}>
              <Image style={styles.photo} source={{uri: 'https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png'}}/>
            </TouchableHighlight>
            <View>
              <Text style={styles.cout}>
                Cost {portalCost}
              </Text>
            </View>

          </View>
        </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    top: 75,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRight: {
    flex: 1,
    flexWrap: "wrap",
    top: 100,
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
    width: 50,
    height: 50
  },
  cout: {
    marginBottom: 20
  }

})

export default CookieClicker;