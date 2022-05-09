import { TextInput, StyleSheet, View } from 'react-native';
import React from 'react';

const InputPayment = ({ placeholder, type, ...set }) => {
  return (
    <View style={styles.parrent}>
      <View style={styles.flexInput} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        keyboardType={type}
        style={styles.input}
        {...set}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parrent: {
    // flex: 1,
  },
  flexInput: {
    flex: 1,
  },
  input: {
    height: 60,
    color: 'black',
    backgroundColor: 'rgba(178, 190, 195,0.3)',
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 15,
  },
});

export default InputPayment;
