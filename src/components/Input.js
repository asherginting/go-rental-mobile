import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from './Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={style.view}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={style.icon}
        />
        <TextInput
          selectionColor={COLORS.black}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={style.textInput}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            style={style.eyePassword}
          />
        )}
      </View>
      {error && (
        <Text style={style.errorMsg}>
          <Icon name='alert-circle'/>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: COLORS.white,
  },
  inputContainer: {
    height: 51,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 14,
    borderWidth: 0.5,
    borderRadius: 10,
    // opacity: 0.5,
    
  },
  icon: {
    color: COLORS.black, 
    fontSize: 22, 
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: COLORS.black, 
  },
  eyePassword: {
    color: COLORS.black, 
    fontSize: 22,
  },
  errorMsg: {
    marginTop: 7, 
    color: COLORS.red, 
    fontSize: 12,
  },
});

export default Input;
