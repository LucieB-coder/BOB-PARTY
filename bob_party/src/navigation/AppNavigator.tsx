import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Store from '../screens/Store'
import Chat from '../screens/Chat'
import Settings from '../screens/Settings'


import Test from '../screens/Test'


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
}

const StoreStack = createStackNavigator();

function StoreStackScreen() {
  return (
    <StoreStack.Navigator screenOptions={{headerShown: false}}>
      <StoreStack.Screen name="Store" component={Store} />
      <StoreStack.Screen name="Settings" component={Settings} />
    </StoreStack.Navigator>
  );
}

const ChatStack = createStackNavigator();

function ChatStackScreen() {
  return (
    <ChatStack.Navigator screenOptions={{headerShown: false}}>
      <ChatStack.Screen name="Chat" component={Chat} />
      <ChatStack.Screen name="Settings" component={Settings} />
    </ChatStack.Navigator>
  );
}

const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        backBehavior='none'
        screenOptions={{headerShown: false, tabBarStyle: { display: 'none' },}}
        >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Store' component={StoreStackScreen} />
        <Tab.Screen name='Chat' component={ChatStackScreen} />
        <Tab.Screen name='Test' component={Test} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default MainTabNavigator