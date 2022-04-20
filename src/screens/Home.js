import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
// import Title from '../components/Title';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const data = [
    { id: 1, image: require('../assets/images/mazda.png') },
    { id: 2, image: require('../assets/images/mazda.png') },
    { id: 3, image: require('../assets/images/mazda.png') },
    { id: 4, image: require('../assets/images/mazda.png') },
  ];

  const navigation = useNavigation()
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image source={require('../assets/images/beat.jpg') } style={styles.listImg} width={265} height={168} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
      <StatusBar translucent backgroundColor="transparent" />
        <Image
          source={require('../assets/images/header.png')}
          style={styles.headerImg}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'rgba(154, 208, 236, 0.1)',
  },
  headerImg: {
    width: '100%',
  },
  coverImg: {
    width: 300,
    marginRight: 20,
  },
  listImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 20,
  },
});

export default Home;
