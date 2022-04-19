import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';
// import Verify from '../screens/Verify';
// import {useSelector} from 'react-redux';

const AuthStack = createNativeStackNavigator();

const AuthStackNav = () => {
  // const {verify} = useSelector(state => state);
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* {verify.gotoVerify ? (
        <AuthStack.Screen name="Verify" component={Verify} />
      ) : ( */}
        <AuthStack.Screen name="Login" component={Login} />
      {/* )} */}
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Forgot" component={Forgot} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNav;
