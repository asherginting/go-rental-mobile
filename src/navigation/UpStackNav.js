import { View, Text } from 'react-native'
import React from 'react'
import History from '../screens/History'
import ChatList from '../screens/ChatList'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Uptab = createMaterialTopTabNavigator()

const UpStackNav = () => {
  return (
    <Uptab.Navigator >
      <Uptab.Screen name='Chat' component={ChatList}
       options={{
         tabBarStyle : {padding: 20, backgroundColor: '#F8F9FA'}
       }}
       />
      <Uptab.Screen name='History' component={History}
      options={{
        tabBarStyle : {padding: 20, backgroundColor: '#F8F9FA'}
      }}
      />
    </Uptab.Navigator>
  )
}

export default UpStackNav