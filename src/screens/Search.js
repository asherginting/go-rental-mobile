import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Text, Input } from 'native-base';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome'
import List from '../components/List';

const Search = ({ navigation }) => {
  const listVehicles = [
    {
      id: 1,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
    {
      id: 2,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
    {
      id: 3,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
    {
      id: 4,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
    {
      id: 5,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
    {
      id: 6,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
    {
      id: 7,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
    {
      id: 8,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
    {
      id: 9,
      name: 'Beat Street',
      seet: 2,
      stock: 14,
      price: 70000,
      image: require('../assets/images/beat.jpg'),
      rating: 4,
    },
  ];

  const [search, setSearch] = useState('');

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.search}>
        <Input
          variant="unstyled"
          placeholder="Search.."
          placeholderTextColor="black"
          value={search}
          onChange={setSearch}
          InputLeftElement={<Icons name='search' color='black' size={16} style={{ marginLeft: 17 }} />}
          InputRightElement={search !== '' ? <TouchableOpacity onPress={() => setSearch('')}><Icons name='remove' color='black' size={11} style={{ marginRight: 19 }} /></TouchableOpacity> : <></>}
        />
        <Icon name="caretdown" size={15} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.filter}
          onPress={() => navigation.navigate('Filter')}>
          <Icon name="filter" color='black' size={30} />
          <Text>Filter Search</Text>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {listVehicles.map((data, index) => (
            <TouchableOpacity key={data.id}>
              <List
                image={data.image}
                name={data.name}
                seet={data.seet}
                stock={data.stock}
                price={data.price}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    marginBottom: 120,
  },
  container: {
    padding: 20,
    marginBottom: 70,
  },
  search: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 19,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
})

export default Search