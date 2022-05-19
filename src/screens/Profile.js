import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Image, Text } from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

const Profile = ({ navigation }) => {
  const [errImg, setErrImg] = useState(false);
  const {profile} = useSelector(state => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: 'AUTH_LOGOUT',
    });
    dispatch({
      type: 'CLEAR_FAV',
    });
  };

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
          size={69}
          style={styles.profileImg}
          resizeMode={'contain'}
          borderRadius={200}
          source={
            profile.results?.image
              ? errImg
                ? require('../assets/images/no-pp.png')
                : {
                    uri: profile.results.image,
                  }
              : require('../assets/images/no-pp.png')
          }
          alt="Photo profile"
          onError={setErrImg}
        />
        <View style={styles.head}>
          <Text bold fontSize="2xl" color={'white'}>
          {profile.results.name || profile.results.username}
          <TouchableOpacity style={styles.editItem} onPress={() => navigation.navigate('UpdateProfile')}>
          <FaIcon name="edit" size={20} color={'white'} />
          </TouchableOpacity>
          </Text>
          <Text bold color={'white'}>
          {profile.results.email}
          </Text>
          <Text bold color={'white'}>
          {profile.results.phoneNumber}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.linkItem}
            onPress={() => navigation.navigate('Favorite')}>
              <FaIcon name="heart" size={25} color={'#0085DF'} />
            <Text fontSize="xl" style={styles.txtProfile}>Your Favorites</Text>
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
        </View>
        <View>
        <Button title="Logout" onPress={handleLogout}/>
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
  editItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favItem: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
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