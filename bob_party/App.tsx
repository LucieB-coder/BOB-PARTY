import MainTabNavigator from './src/navigation/AppNavigator'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import LoaderUserApi from './src/services/userServices/loaderUserApi'
import ManagerUser from './src/services/userServices/ManagerUser'
import FakeSaverUser from './src/services/userServices/fakeSaverUser'
import React, { useCallback } from 'react';
import { useUserStore } from './userContext';


export const MANAGER_USER = new ManagerUser(new LoaderUserApi, new FakeSaverUser);  

  
  export default function App() {

    return (
      <Provider store={store}>
        <MainTabNavigator/>
      </Provider>
    );
  }
  
  
