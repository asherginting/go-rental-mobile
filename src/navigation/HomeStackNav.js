import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import Filter from '../screens/SearchList'
import Category from '../screens/DetailCategory'

const HomeStack = createNativeStackNavigator()

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='HomePage' component={Home} />
      <HomeStack.Screen name='Filter' component={Filter} />
      <HomeStack.Screen name='Category' component={Category} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNav