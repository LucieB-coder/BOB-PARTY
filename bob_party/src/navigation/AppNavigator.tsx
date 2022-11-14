import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Store from '../screens/Store'
import Chat from '../screens/Chat'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'
import SkinList from '../screens/SkinList'
import GameChoice from '../screens/GameChoice'



const HomeStack = createStackNavigator();

/*
  Stack of screens for home and game choice
*/
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
/*
  Stack of screens for the store and the purshase of new skins
*/
function StoreStackScreen() {
  return (
    <StoreStack.Navigator screenOptions={{headerShown: false}}>
      <StoreStack.Screen name="Store" component={Store} />
      <StoreStack.Screen name="Settings" component={Settings} />
    </StoreStack.Navigator>
  );
}

const ChatStack = createStackNavigator();
/*
  Stack of screens for conversations 
*/
function ChatStackScreen() {
  return (
    <ChatStack.Navigator screenOptions={{headerShown: false}}>
      <ChatStack.Screen name="Chat" component={Chat} />
      <ChatStack.Screen name="Settings" component={Settings} />
    </ChatStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
/*
  Stack of screens for the profile and the changement of informations
*/
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} options={{animationEnabled: false,}}/>
      <ProfileStack.Screen name="Settings" component={Settings} />
      <ProfileStack.Screen name="SkinList" component={SkinList} options={{animationEnabled: false,}}/>
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator()
/*
  Tab navigator to navigate between the stacks
*/
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
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default MainTabNavigator