import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Home from '../screens/Home'
import Store from '../screens/Store'


// import Detail from '../screens/Detail'
// import Settings from '../screens/Settings'
// import Profile from '../screens/Profile'

const Stack = createStackNavigator()


function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        
        initialRouteName='Home'
        
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
        {/* <Stack.Screen
          name='Detail'
          component={Detail}
          options={({ route }) => ({
            title: route.params.item.name
          })}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ title: 'Settings' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator