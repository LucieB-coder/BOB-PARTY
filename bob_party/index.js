import React from 'react'
import App from './App'
import store from './src/redux/store'
import { Provider } from 'react-redux'


export default function Index(){

  return(
    <App/>
    /*
    <Provider store={store}>
        <App />
    </Provider>
    */
  )
}