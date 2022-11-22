import LoaderUserApi from './src/services/userServices/loaderUserApi'
import ManagerUser from './src/services/userServices/ManagerUser'
import FakeSaverUser from './src/services/userServices/fakeSaverUser'
import { View, Text, Button } from 'react-native';
import React, { useCallback } from 'react';
import { useUserStore } from './userContext';
import stylesScreen from './src/screens/style/screens.style'
import { User } from './src/core/User/user';
import tabSkinApp from './src/constSkin';
import { stat } from 'fs';
import StubUser from './src/services/userServices/stub';



export const MANAGER_USER = new ManagerUser(new StubUser, new FakeSaverUser);  

  
  export default function App() {
    const setUser = useUserStore((state) => state.setUser);
    const resetUser = useUserStore((state) => state.resetUser);
    
    const handleUserConnect = useCallback(async () => {
      /*
      fetch(GET_USER_URL)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          throw new Error("Bad User");
        })
        .then((user) => {
          setUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
        */
      await MANAGER_USER.getLoaderUser().loadByID("14").then((res) => {
        MANAGER_USER.setCurrentUser(res);
        console.log(res);
      });
      setUser(MANAGER_USER.getCurrentUser());
       

    }, []);
  
    const handleUserLogout = useCallback(async () => {
      // TODO: Call logout API
      MANAGER_USER.setCurrentUser(null);
      resetUser();
    }, []);

    const handleUserChange = useCallback(async () => {
      MANAGER_USER.getCurrentUser()?.setCurrentCoins(MANAGER_USER.getCurrentUser()?.getCurrentCoins()+100);
      setUser(MANAGER_USER.getCurrentUser());
    }, []);
    

    return (
      <View style={stylesScreen.bodyCenter}>
        <AUser />
        <Button onPress={handleUserConnect} title="Connect"></Button>
        <Button onPress={handleUserLogout} title="Logout"></Button>
        <Button onPress={handleUserChange} title="testChangement"></Button>
      </View>
    );
  }
  
  
  const AUser = () => {
    const userName = useUserStore((state) => state.user?.getUsername());
    const test = useUserStore((state) => state.user?.getCurrentCoins());
    return userName === undefined ? (
      <Text>Not Connected</Text>
    ) : (
      <View>
        <Text>Hello {userName}</Text>
        <Text>Money {test}</Text>
      </View>
    );
  };


