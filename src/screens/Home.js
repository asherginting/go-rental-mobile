import { 
  View, 
  Text, 
  TextInput, 
  ImageBackground, 
  StyleSheet, 
  FlatList, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import {Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {getCategory, getFilter} from '../redux/actions/vehicles';
import {getDetailCategory} from '../redux/actions/detailCategory';
import {myOrder} from '../redux/actions/transaction';
import {getProfile} from '../redux/actions/user';
import Button from '../components/Button';

const DetailTop = ({category, onPress}) => {
  return (
    <View style={styles.topProduct}>
      <Text style={styles.type}>{category}</Text>
      <TouchableOpacity style={styles.more} onPress={onPress}>
        <Text style={styles.viewmore}>View More</Text>
        <Icon2 style={styles.iconnext} name="navigate-next" size={20} />
      </TouchableOpacity>
    </View>
  );
};
const FlatListSection = ({dataList, onPress, navigation}) => {
  const dispatch = useDispatch();
  const handleOrder = id => {
    dispatch(myOrder(id));
    navigation.navigate('Order');
  };
  return (
    <FlatList
      data={dataList}
      horizontal={true}
      style={styles.flat}
      renderItem={({item, index}) => {
        if (index < 5) {
          return (
            <TouchableOpacity onPress={() => handleOrder(item.idVehicle)}>
              <ImageBackground
                source={
                  item.image
                    ? {uri: item.image.replace(/localhost/g, '192.168.247.222')}
                    : require('../assets/images/header.png')
                }
                style={styles.imgProduct}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        }
      }}
    />
  );
};

const Home = ({navigation}) => {
  const [key, setKey] = useState();

  const dispatch = useDispatch();
  const {car, motorbike, bike, auth, profile} = useSelector(
    state => state,
  );

  useEffect(() => {
    dispatch(getCategory('CAR'));
    dispatch(getCategory('MOTORBIKE'));
    dispatch(getCategory('BIKE'));
    dispatch(getProfile(auth.token));
  }, []);

  const gotoDetail = (nameCategory, idCategory) => {
    dispatch(getDetailCategory(nameCategory, idCategory));
    navigation.navigate('DetailCategory');
  };

  const handleSearch = () => {
    const dataFilter = {search: key};
    dispatch(getFilter(dataFilter));
    navigation.navigate('SearchList');
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/images/header.png')}
          alt="home header"
          style={styles.image}>
        </ImageBackground>
        <View style={styles.wrapperProduct}>
          <DetailTop
            onPress={() => gotoDetail('car', car.results[0].idCategory)}
            category="Car"
          />
          <View>
            <FlatListSection
              dataList={car.results}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.wrapperProduct}>
          <DetailTop
            onPress={() =>
              gotoDetail('motorbike', motorbike.results[0].idCategory)
            }
            category="Motorbike"
          />
          <View>
            <FlatListSection
              dataList={motorbike.results}
              // onPress={() => navigation.navigate('Order')}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.wrapperProduct}>
          <DetailTop
            onPress={() => gotoDetail('bike', bike.results[0].idCategory)}
            category="Bike"
          />
          <View>
            <FlatListSection
              dataList={bike.results}
              // onPress={() => navigation.navigate('Order')}
              navigation={navigation}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 290,
  },
  form: {
    padding: 30,
    justifyContent: 'center',
    marginTop: 45,
    position: 'relative',
  },
  input: {
    height: 60,
    color: '#fff',
    backgroundColor: 'rgba(34, 47, 62,0.6)',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 0,
  },
  iconSearchWrap: {
    position: 'absolute',
    right: 40,
    height: '100%',
    width: 90,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'red'
  },
  searchIcon: {
    color: '#fff',
  },
  textadmin: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 45,
  },
  wrapperProduct: {
    padding: 20,
  },
  topProduct: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  more: {
    flexDirection: 'row',
  },
  viewmore: {
    color: '#0085DF',
  },
  iconnext: {
    color: '#0085DF',
  },
  imgWrapper: {
    width: 250,
    marginTop: 10,
    height: 200,
    borderRadius: 10,
  },
  imgProduct: {
    marginRight: 20,
    width: 300,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default Home;

