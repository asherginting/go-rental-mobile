import React from "react";
import { ImageBackground, StyleSheet, View, StatusBar } from "react-native";


const Forgot = () => (
  <View style={styles.container}>
    <StatusBar translucent backgroundColor='transparent' />
    <ImageBackground source={require('../assets/images/bg-forgot.png')} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>
);

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