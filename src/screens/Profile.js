import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image, Text } from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

const Profile = ({ navigation }) => {

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/no-pp.jpg')}
          size={70}
          resizeMode={'contain'}
          borderRadius={'full'}
          alt="Picture-Profile"
        />
        <View style={styles.head}>
          <Text bold fontSize="2xl">
            No Name
          </Text>
          <Text bold>
            noname@mail.com
          </Text>
          <Text bold>
            +62 8123 456 789
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.linkItem}
            onPress={() => navigation.navigate('Favorite')}>
            <Text fontSize="xl">Your favorites</Text>
            <FaIcon name="chevron-right" size={15} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}
            onPress={() => navigation.navigate('Faq')}>
            <Text fontSize="xl">FAQ</Text>
            <FaIcon name="chevron-right" size={15} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}
          onPress={() => navigation.navigate('Help')}>
            <Text fontSize="xl">Help</Text>
            <FaIcon name="chevron-right" size={15} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => navigation.navigate('UpdateProfile')}>
            <Text fontSize="xl">Update profile</Text>
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
  container: {
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  header: {
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 40,
    // paddingHorizontal: 20,
    paddingVertical: 30,
  },
  list: {
    paddingVertical: 20,
  },
  linkItem: {
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Profile