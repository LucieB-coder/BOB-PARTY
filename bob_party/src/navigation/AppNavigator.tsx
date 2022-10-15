import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Store from '../screens/Store'
import Chat from '../screens/Chat'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'
import GameChoice from '../screens/GameChoice'


import Test from '../screens/Test'


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} options={{animationEnabled: false,}}/>
      <HomeStack.Screen name="Settings" component={Settings} />
      <HomeStack.Screen name='GameChoice' component={GameChoice} options={{animationEnabled: false,}}/>
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

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Settings" component={Settings} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior='none'
        screenOptions={{headerShown: false, tabBarStyle: { display: 'none' },}}
        >
        <Tab.Screen name='HomeTab' component={HomeStackScreen} />
        <Tab.Screen name='StoreTab' component={StoreStackScreen} />
        <Tab.Screen name='ChatTab' component={ChatStackScreen} />
        <Tab.Screen name='ProfileTab' component={ProfileStackScreen} />
        <Tab.Screen name='Test' component={Test} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default MainTabNavigator