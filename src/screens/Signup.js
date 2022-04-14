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

import COLORS from "../components/Colors";
import Button from "../components/Button";
import Input from "../components/Input";

const Signup = ({navigation}) => {
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
  
    if (!input.username) {
      handleError('Username is required!', 'username');
      isValid = false;
    } else if (input.username.length < 4) {
      handleError('Username at least 4 characters!', 'username');
      isValid = false;
    }
  
    if (!input.email) {
      handleError('Email is required!', 'email');
      isValid = false;
    } else if (!input.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please, input a valid email!', 'email');
      isValid = false;
    }
  
    if (!input.phone) {
      handleError('Phone Number is Required!', 'phone');
      isValid = false;
    } else if (input.phone.length < 10) {
      handleError('Min length of phone number is 10 digits!', 'phone');
      isValid = false;
    } else if (input.phone.length > 13) {
      handleError('Max length of phone number is 13 digits!', 'phone');
      isValid = false;
    }
  
    if (!input.password) {
      handleError('Password is Required!', 'password');
      isValid = false;
    } else if (input.password.length < 6) {
      handleError('Minimum length of password is 6 digits!', 'password');
      isValid = false;
    } else if (input.password.match(/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass)))
      handleError('Password must be at least 6 characters must contain numeric lowercase and uppercase letter!')
      isValid = false;
  
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
      <ImageBackground source={require('./src/assets/images/bg-signup.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 29}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          LET'S HAVE
        </Text>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          SOME RIDE
        </Text>

        <View style={{color: COLORS.black}}>
          <Input
            onChangeText={text => handleOnchange(text, 'username')}
            onFocus={() => handleError(null, 'username')}
            iconName="account-outline"
            placeholder="Enter your Username"
            error={error.username}
          />

          <Input
            keyboardType="email-address"
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            placeholder="Enter your email address"
            error={error.email}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            placeholder="Enter your phone number"
            error={error.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            placeholder="Enter your password"
            error={error.password}
            password
          />
          <Button title="Signup" onPress={validateForm} />
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: COLORS.black,
              // fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account ? Login
          </Text>
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

export default Signup;