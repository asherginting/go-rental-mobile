import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from "../components/Colors";
import Input from '../components/Input';
import Button from '../components/Button';
import {useState} from 'react/cjs/react.development';

const Signup = ({navigation}) => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    phone_number: '',
    password: '',
  });

  const [error, setError] = useState({});

  const validateForm = () => {
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

  // const goToLogin = () => {
  //   navigation.navigate('Login');
  //   dispatch({type: 'AUTH_CLEAR_ERR'});
  // };

  return (
      <ScrollView style={styles.scrollview}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../assets/images/bg-signup.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.opacity}>
          <View style={styles.header}>
            <Text style={styles.head}>LET'S HAVE</Text>
            <Text style={styles.head}>SOME RIDE</Text>
          </View>
          <View style={{color: COLORS.white}}>
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
          <View style={styles.bottomText}>
              <Text style={styles.text}>Already have account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.text, styles.linklogin]}> Login now</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </ImageBackground>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    height: '100%',
  },
  image: {
    height: '100%',
  },
  opacity: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    marginVertical: 110,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ['text']: {
    color: '#fff',
  },
  linklogin: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 78,
    fontWeight: 'bold',
  },
});

export default Signup;
