import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { Image, Text } from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

const Profile = ({ navigation }) => {

  return (
    <View style={styles.main}>
      <View style={styles.header}>
      <StatusBar translucent backgroundColor="transparent" />
        <Image
          source={require('../assets/images/header2.png')}
          style={styles.headerImg}
          alt="background-header"
        />
        <Image
          source={require('../assets/images/no-pp.png')}
          style={styles.profileImg}
          size={70}
          resizeMode={'contain'}
          borderRadius={'full'}
          alt="Picture-Profile"
        />
        <View style={styles.head}>
          <Text bold fontSize="2xl" color={'white'}>
            No Name
          </Text>
          <Text bold color={'white'}>
            noname@mail.com
          </Text>
          <Text bold color={'white'}>
            +62 8123 456 789
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.linkItem}
            onPress={() => navigation.navigate('Favorite')}>
              <FaIcon name="heart" size={25} color={'#0085DF'} />
            <Text fontSize="xl" style={styles.txtProfile}>Your favorites</Text>
            <FaIcon name="chevron-right" size={15} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}
            onPress={() => navigation.navigate('Faq')}>
              <FaIcon name="comment" size={25} color={'#0085DF'} />
            <Text fontSize="xl" style={styles.txtFaq}>FAQ</Text>
            <FaIcon name="chevron-right" size={15} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}
          onPress={() => navigation.navigate('Help')}>
            <FaIcon name="question-circle" size={25} color={'#0085DF'} />
            <Text fontSize="xl" style={styles.txtHelp}>Help</Text>
            <FaIcon name="chevron-right" size={15} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => navigation.navigate('UpdateProfile')}>
              <FaIcon name="edit" size={25} color={'#0085DF'} />
            <Text fontSize="xl" style={styles.txtProfile}>Update profile</Text>
            <FaIcon name="chevron-right" size={15} />
          </TouchableOpacity>
        </View>
        <View>
        <Button title="Logout"/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: '100%',
  },
  head: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  headerImg: {
    width: '100%',
  },
  profileImg: {
    marginTop: -190,
  },
  container: {
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 40,
    // paddingVertical: 60,
  },
  list: {
    paddingVertical: 20,
  },
  linkItem: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtProfile: {
    marginRight: 160,
  },
  txtHelp: {
    marginRight: 250,
  },
  txtFaq: {
    marginRight: 257,
  },
});

export default Profile