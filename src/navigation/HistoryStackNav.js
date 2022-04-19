import { View, Text } from 'react-native'
import React from 'react'
import History from '../screens/History'
import ChatList from '../screens/ChatList'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const HistoryTab = createMaterialTopTabNavigator()

const HistoryStackNav = () => {
  return (
    <HistoryTab.Navigator >
      <HistoryTab.Screen name='Chat' component={ChatList} />
      <HistoryTab.Screen name='History Order' component={History} />
    </HistoryTab.Navigator>
  )
}

export default HistoryStackNav