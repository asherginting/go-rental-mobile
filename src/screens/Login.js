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

const Login = ({navigation}) => {
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
      <ImageBackground source={require('./src/assets/images/bg-login.png')} resizeMode="cover" style={styles.image}></ImageBackground>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 29}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          LET'S EXPLORE
        </Text>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          THE WORLD
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
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            placeholder="Enter your password"
            error={error.password}
            password
          />
          <Text
            onPress={() => navigation.navigate('Home')}
            style={{
              color: COLORS.black,
              // fontWeight: 'bold',
              textAlign: 'left',
              fontSize: 16,
            }}>
            Forgot Password?
          </Text>
          <Button title="Login" onPress={validateForm} />
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

export default Login;