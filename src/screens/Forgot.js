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
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react/cjs/react.development';

const Login = ({navigation}) => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState({});

  const validateForm = () => {
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
      <ScrollView style={styles.scrollview}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../assets/images/bg-forgot.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.opacity}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.goBack()}>
              <Icon style={[styles.text, styles.icon]} name="left" size={25} />
              <Text style={[styles.text, styles.textBack]}> Back</Text>
            </TouchableOpacity>
            <Text style={styles.head}>THAT’S OKAY, WE</Text>
            <Text style={styles.head}>GOT YOUR BACK</Text>
          </View>
          <View style={{color: COLORS.white}}>
          <View style={styles.headerText}>
              <Text style={[styles.text,]}>Enter your email to get reset password code </Text>
          </View>
          <Input
            keyboardType="email-address"
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            placeholder="Enter your email address"
            error={error.email}
          />
          <View style={styles.codeButton}>
          <Button title="Send Code" onPress={validateForm} />
          </View>
          <View style={styles.resendButton}>
          <Button title="Resend Code" onPress={validateForm} />
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
  back: {
    marginTop: -100,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginEnd: 20,
  },
  textBack: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    marginVertical: 240,
    marginBottom: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  head: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  headerText: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 220,
  },
  ['text']: {
    color: '#fff',
  },
  codeButton: {
    marginTop: 15,
  },
  resendButton: {
    marginTop: -15,
    marginBottom: 230,
  },
  linkForgot: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 130,
    marginTop: 10,
  },
  linkSignup: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 90,
    fontWeight: 'bold',
  },
});

export default Login;
