import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomStackNav from './BottomStackNav'
import UpdateProfile from '../screens/UpdateProfile'
import Favorite from '../screens/Favorite'
import ChatRoom from '../screens/ChatRoom'
import Detail from '../screens/Detail'
import Payment from '../screens/Payment'
import Payment2 from '../screens/Payment2'
import Payment3 from '../screens/Payment3'
import PaymentFinish from '../screens/PaymentFinish'
import AddVehicle from '../screens/AddVehicle'

const MainStack = createNativeStackNavigator()

const MainStackNav = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name='BottomTab' component={BottomStackNav} />
      <MainStack.Screen name='UpdateProfile' component={UpdateProfile} />
      <MainStack.Screen name='Favorite' component={Favorite} />
      <MainStack.Screen name='ChatRoom' component={ChatRoom} />
      <MainStack.Screen name='DetailVehicle' component={Detail} />
      <MainStack.Screen name='Payment' component={Payment} />
      <MainStack.Screen name="Payment2" component={Payment2} />
      <MainStack.Screen name="Payment3" component={Payment3} />
      <MainStack.Screen name='PaymentFinish' component={PaymentFinish} />
      <MainStack.Screen name='AddVehicle' component={AddVehicle} />
    </MainStack.Navigator>
  )
}

export default MainStackNav