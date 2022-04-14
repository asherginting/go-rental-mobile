import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import COLORS from './Colors';

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style= {styles.btn}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 51,
    width: '100%',
    backgroundColor: COLORS.blue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: COLORS.white,
    fontWeight: 'bold', 
    fontSize: 18,
  },
});

export default Button;
