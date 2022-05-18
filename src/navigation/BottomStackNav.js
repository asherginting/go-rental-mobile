import React from 'react';
import { View, Text } from 'react-native'
import HomeStackNav from './HomeStackNav'
import UpStackNav from './UpStackNav'
import Search from '../screens/Search'
import Profile from '../screens/Profile'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BottomTab = createBottomTabNavigator()

const BottomStackNav = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#0085DF' }}>

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <><Icon name='home-circle' color={color} size={30} /><Text>Home</Text></>
      }} name='HomeStackNav' component={HomeStackNav} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <><Icon name='magnify' color={color} size={30} /><Text>Search</Text></>
      }} name='Search' component={Search} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <><Icon name='view-list' color={color} size={30} /><Text>List</Text></>
      }} name='HistoryTab' component={UpStackNav} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <><Icon name='account-circle' color={color} size={30} /><Text>Profile</Text></>
      }} name='Profile' component={Profile} />

    </BottomTab.Navigator>
  )
}

export default BottomStackNav