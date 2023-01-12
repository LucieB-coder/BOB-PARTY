import React,{Component, useState} from 'react';
import { 
  View,
  StyleSheet,
  ImageBackground,
  UIManager,
  StatusBar,
  NativeModules,
  AppState,
  Platform
} from 'react-native';
import cardsDeck from './source/data/cards';
import {shuffle} from './source/helpers';
import {Overlay,ChipSelector, UserControls,FloatingText} from './source/components';
import boardBg from './source/assets/board.png';
import { MANAGER_USER } from '../../../appManagers';
import { UserCoinsModifier } from '../../core/User/userCoinsModifier';
import { useNavigation } from '@react-navigation/native';
import { useUserStore } from '../../context/userContext';


export default function BlackJack(props){

  const [totalBet, setTotalBet] = useState(0);
  const [amount, setAmount] = useState(MANAGER_USER.getCurrentUser()?.getCurrentCoins());
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameover, setGameover] = useState(false);
  const [cardCount, setCardCount] = useState(0);
  const [gameMessage, setGameMessage] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const navigation = useNavigation();

    return(
      <>
        <ImageBackground 
          source={boardBg}
          style={styles.container}>

          <StatusBar backgroundColor={"green"} translucent={true} />

          <View style={styles.bottom}>

            <UserControls 
              playerHand={playerHand}
              dealerHand={dealerHand}
              goBack={() => navigation.goBack()}
              hit={() => hit()}
              doubleGame={() => doubleGame()}
              endgame={() => endgame()}
              gameover={gameover}
              totalBet={totalBet}
            />

            <View style={styles.center}>
              <FloatingText 
                text={`Total Bet $ ${totalBet}`}
              />
            </View>
            <ChipSelector 
              onSelect={(chipValue) => {
                if(!gameover && startGame){
                  if(chipValue <= amount && !gameStarted){
                    setTotalBet(totalBet+chipValue);
                    setAmount(amount-chipValue);
                  }
                }
                else{
                  if (amount > 0 && amount>=chipValue){
                      newGame();
                      setTotalBet(totalBet+chipValue);
                      setAmount(amount-chipValue);
                  }
                }
              }}
            />
            <View style={styles.center}>
              <FloatingText 
                text={`Available $ ${amount}`}
              />
            </View>

            {gameover && gameMessage != "" && <Overlay text={gameMessage} onClose={() => { newGame() }} />}

          </View>
        </ImageBackground>
      </>
    )

    async function modifAmount(money){
      const modif = new UserCoinsModifier();
      const tmp=MANAGER_USER.getCurrentUser();
      setAmount(money);
      if (tmp!=null){
        await modif.changeCurrentCoins(tmp, money);
        useUserStore().setUser(MANAGER_USER.getCurrentUser());
      }
    }

    function newGame(){
      let cardCount = 0;
      shuffle(cardsDeck);
      
      let playerHand = [],
      dealerHand = [];

      for(let i = 0; i < 2; i++){
        playerHand.push(cardsDeck[cardCount]);
        cardCount++;
        dealerHand.push(cardsDeck[cardCount]);
        cardCount++;
      }
  
      setPlayerHand(playerHand);
      setDealerHand(dealerHand);
      setGameover(false);
      setCardCount(cardCount);
      setGameMessage("");
      setStartGame(true);
    }
  
    function hit(){
      const hand=playerHand;

      hand.push(cardsDeck[cardCount]);
  
        let userPoints = checkTotalPlayerPoints(hand);
        setGameStarted(true);
        setPlayerHand(hand);
        setCardCount(cardCount+1)
  
        if(userPoints > 21){
          endgame();
          return;
        }
    }
  
    function doubleGame(){
      hit();
      endgame();
    }
  
    async function endgame(){
  
      let _cardCount = cardCount;
  
      let dealerPoints = checkTotalPlayerPoints(dealerHand),
      playerPoints = checkTotalPlayerPoints(playerHand);
      //alert(dealerPoints)
      while(dealerPoints < 17){
        dealerHand.push(cardsDeck[_cardCount]);
        _cardCount++;
        dealerPoints = checkTotalPlayerPoints(dealerHand);
      }
  
      let betValue = totalBet * 1.5;
      setGameStarted(false);

      //who won
      if(playerPoints == 21 && playerHand.length == 2){
        //multiplicar su apuesta x 1.5
        let newAmount = totalBet * 1.5;
        await modifAmount(newAmount);
        setTotalBet(0);
        setGameover(true);
        setGameMessage("Player BlackJack!");
      }
  
      if(
        (playerPoints < 22 && dealerPoints < playerPoints) || 
        (dealerPoints > 21 && playerPoints < 22)
      ){

        await modifAmount(amount+betValue);

        setTotalBet(0);
        setGameover(true);
        setGameMessage("You Win $ "+ betValue);
        
      }
      else if(playerPoints > 21 && dealerPoints <= 21){
        await modifAmount(amount);
        setCardCount(_cardCount);
        setTotalBet(0);
        setGameover(true);
        setGameMessage("Bust!");

      }else if(playerPoints == dealerPoints){
        await modifAmount(amount+totalBet);

        setTotalBet(0);
        setGameover(true);
        setGameMessage("Push!");
      }else{
        
        await modifAmount(amount);
        setTotalBet(0);
        setGameover(true);
        setGameMessage("Dealer Wins, You Lost");
      }
    }
  
    function checkTotalPlayerPoints(playerHand){
      let aceAdjuts = false,
      points = 0;
      playerHand.map((card,_index) => {
        if(card.name == 'A' && !aceAdjuts) {
          aceAdjuts = true;
          points = points + 10;
        }
        points = points + card.value;
      });
  
      if(aceAdjuts && points > 21){
        points = points - 10;
      }
  
      return points;
    }
  }
  
  const styles = StyleSheet.create({
    container : {
      flex : 1
    },
    center : {
      alignItems : "center"
    },
  
    bottom : {
      position : "absolute",
      left : 0,
      right : 0,
      bottom : 0,
      zIndex : 2
    }
  });

  