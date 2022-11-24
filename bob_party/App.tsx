import MainTabNavigator from './src/navigation/AppNavigator'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import LoaderUserApi from './src/services/userServices/loaderUserApi'
import ManagerUser from './src/services/userServices/ManagerUser'
import FakeSaverUser from './src/services/userServices/fakeSaverUser'
import React, { useCallback } from 'react';
import { useUserStore } from './src/context/userContext';


export const MANAGER_USER = new ManagerUser(new LoaderUserApi, new FakeSaverUser);  

  
  export default function App() {
    const setUser = useUserStore((state) => state.setUser);
    const resetUser = useUserStore((state) => state.resetUser);
    
    const handleUserConnect = useCallback(async () => {

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

    

    const test = useCallback(async () => {
      const tab = await MANAGER_USER.getLoaderUser().loadAllUser();
      MANAGER_USER.setCurrentUser(tab[0]);
      setUser(MANAGER_USER.getCurrentUser());
    }, []);

    return (
      <Provider store={store}>
        <MainTabNavigator/>
      </Provider>
    );
  }
  
  
