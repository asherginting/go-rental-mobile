import React, {useState} from "react";
import {
  ImageBackground,
  StatusBar,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';

import COLORS from "./src/components/Colors";
import Button from "./src/components/Button";
import Input from "./src/components/Input";

const Forgot = ({navigation}) => {
  // <View style={styles.container}>
  //   <StatusBar translucent backgroundColor='transparent' />
  //   <ImageBackground source={require('./src/assets/images/bg-signup.png')} resizeMode="cover" style={styles.image}>
  //   </ImageBackground>
  // </View>

  const [input, setInput] = useState({
    username: '',
    email: '',
    phone_number: '',
    password: '',
  });

  const [error, setError] = useState({});

  const validateForm = () => {
    Keyboard.dismiss();
    let isValid = true;
  
    if (!input.email) {
      handleError('Email is required!', 'email');
      isValid = false;
    } else if (!input.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please, input a valid email!', 'email');
      isValid = false;
    }
    
    if (isValid) {
      register();
    }
  };

  const register = () => {

  };

  const handleOnchange = (text, input) => {
    setInput(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setError(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <ImageBackground source={require('./src/assets/images/bg-forgot.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 29}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          THAT'S OKAY, WE
        </Text>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          GOT YOUR BACK
        </Text>

        <View style={{color: COLORS.black}}>
        <Text
            onPress={() => navigation.navigate('Home')}
            style={{
              color: COLORS.black,
              // fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 14,
            }}>
            Enter your email to get reset password code
          </Text>
          <Input
            keyboardType="email-address"
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            placeholder="Enter your email address"
            error={error.email}
          />

          <Button title="Send Code" onPress={validateForm} />
          <Button title="Resend Code" onPress={validateForm} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Forgot;