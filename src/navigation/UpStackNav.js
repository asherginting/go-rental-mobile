import { View, Text } from 'react-native'
import React from 'react'
import History from '../screens/History'
import ChatList from '../screens/ChatList'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Uptab = createMaterialTopTabNavigator()

const UpStackNav = () => {
  return (
    <Uptab.Navigator >
      <Uptab.Screen name='Chat' component={ChatList} />
      <Uptab.Screen name='History' component={History} />
    </Uptab.Navigator>
  )
}

export default UpStackNav