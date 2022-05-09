import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Stepper = ({ currentlyActive, count = 3 }) => {
  const weight = 36;
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    lineWrapper: {
      flexDirection: 'row',
      position: 'absolute',
      width: '100%',
      justifyContent: 'space-around',
    },
    line: {
      height: 4,
      width: weight + 5,
    },
    stepper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: weight,
    },
    item: {
      width: weight,
      height: weight,
      borderRadius: weight / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: weight / 2,
      color: 'white',
      fontWeight: 'bold',
    },
  });

  const STEPPER_WIDTH = (weight + 10) * count;
  return (
    <View style={styles.wrapper}>
      <View style={[styles.stepper, { width: STEPPER_WIDTH }]}>
        <View style={styles.lineWrapper}>
          {[...Array(count - 1)].map((data, index) => {
            return (
              <LinearGradient
                key={index}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={
                  currentlyActive - 1 >= index + 1
                    ? ['#3E2C41', '#5C527F', '#6E85B2']
                    : ['#DFDEDE', '#DFDEDE']
                }
                style={styles.line}
              />
            );
          })}
        </View>
        {[...Array(count)].map((data, index) => {
          return (
            <LinearGradient
              key={index}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={
                currentlyActive >= index + 1
                  ? ['#0085DF', '#39A1E7', '#0085DF']
                  : ['#DFDEDE', '#DFDEDE']
              }
              style={styles.item}>
              <Text style={styles.text}>{index + 1}</Text>
            </LinearGradient>
          );
        })}
      </View>
    </View>
  );
};

export default Stepper;
