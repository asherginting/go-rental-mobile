import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from "../components/Colors";
import Input from '../components/Input';
import Button from '../components/Button';

import {authLogin} from '../redux/actions/auth';

const Login = ({navigation}) => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({});
  const [isError, setIsError] = useState();

  const dispatch = useDispatch();
  const {auth, verify, signup} = useSelector(state => state);
  useEffect(() => {
    dispatch({
      type: 'AUTH_CLEAR_ERR',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleLogin = () => {
    if (username && password) {
      setIsError(false);
      dispatch(authLogin(username, password));
      dispatch({
        type: 'AUTH_CLEAR_ERR',
      });
      dispatch({type: 'SIGNUP_CLEAR'});
    } else {
      setIsError(true);
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
    setIsError(false);
    dispatch({
      type: 'AUTH_CLEAR_ERR',
    });
    dispatch({
      type: 'SIGNUP_CLEAR',
    });
  };

  const handleForgot = () => {
    navigation.navigate('Forgot');
    setIsError(false);
    dispatch({
      type: 'AUTH_CLEAR_ERR',
    });
  };

  const validateForm = () => {
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
      <ScrollView style={styles.scrollview}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../assets/images/bg-login.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.opacity}>
          <View style={styles.header}>
            <Text style={styles.head}>LET'S EXPLORE</Text>
            <Text style={styles.head}>THE WORLD</Text>
          </View>
          <View style={{color: COLORS.white}}>
          <Input
            // onChangeText={text => handleOnchange(text, 'username')}
            onChangeText={setUsername}
            onFocus={() => handleError(null, 'username')}
            iconName="account-outline"
            placeholder="Enter your Username"
            error={error.username}
            value={username}
          />
          <Input
            // onChangeText={text => handleOnchange(text, 'password')}
            onChangeText={setPassword}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            placeholder="Enter your password"
            error={error.password}
            password
            value={password}
          />
          <View style={styles.forgotText}>
          <TouchableOpacity onPress={handleForgot}>
              <Text style={[styles.text, styles.linkForgot]}>Forgot Password? </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.loginButton}>
          <Button title="Login" onPress={handleLogin} />
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.text}>Don’t have account?</Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={[styles.text, styles.linkSignup]}> Sign up now</Text>
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
    marginVertical: 170,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  forgotText: {
    flexDirection: 'row',
    marginTop: 10,
    // marginBottom: 220,
  },
  ['text']: {
    color: '#fff',
  },
  loginButton: {
    marginTop: 15,
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 240,
    alignItems: 'center',
    justifyContent: 'center',
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
