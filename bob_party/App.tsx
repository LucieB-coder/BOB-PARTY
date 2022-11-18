import React from 'react'
import { GameMulti } from './src/core/gameMulti'
import { GameSolo } from './src/core/gameSolo'
import { Match } from './src/core/match'
import { MatchMulti } from './src/core/matchMulti'
import MainTabNavigator from './src/navigation/AppNavigator'
import FakeSaverUser from './src/screens/services/userServices/fakeSaverUser'
import ManagerUser from './src/screens/services/userServices/ManagerUser'
import StubUser from './src/screens/services/userServices/stub'


export default function App() {
  let m=new ManagerUser(new StubUser, new FakeSaverUser);
  let tabU=m.getLoaderUser().loadAllUser();
  m.setCurrentUser(tabU[0]);

  let match= new MatchMulti("00001", [...tabU], new GameMulti("1", "SNAKE", require('./assets/Icons/UnSelected/Gamepad.png'),"ouin", 1, 1, new Map<number,number>));
  console.log(m.getLoaderUser().loadUserByMatch(match));
  //return <MainTabNavigator/>
}
