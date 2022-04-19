import React from 'react';
import HomeStackNav from './HomeStackNav'
import HistoryStackNav from './HistoryStackNav'
import Search from '../screens/Search'
import Profile from '../screens/Profile'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomTab = createBottomTabNavigator()

const BottomStackNav = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#5C527F' }}>

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <Icon name='home' color={color} size={size} />
      }} name='HomeStackNav' component={HomeStackNav} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <Icon name='search' color={color} size={size} />
      }} name='Search' component={Search} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <Icon name='th-list' color={color} size={size} />
      }} name='HistoryTab' component={HistoryStackNav} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <Icon name='user' color={color} size={size} />
      }} name='Profile' component={Profile} />

    </BottomTab.Navigator>
  )
}

export default BottomStackNav