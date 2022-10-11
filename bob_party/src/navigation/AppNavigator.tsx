import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Home from '../screens/Home'
import Store from '../screens/Store'
import Test from '../screens/Test'

const Stack = createStackNavigator()


function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Test'
        screenOptions={{headerShown: false,}} 
        >

        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Store'
          component={Store}
        />

        <Stack.Screen
          name='Test'
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator