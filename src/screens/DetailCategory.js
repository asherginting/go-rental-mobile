import {StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
// import {Image} from 'native-base';
import React, {useState} from 'react';
import VehicleList from '../components/VehicleList';
import {useSelector, useDispatch} from 'react-redux';
import {myOrder} from '../redux/actions/transaction';
import {getCategory} from '../redux/actions/vehicles';

const DetailCategory = ({navigation}) => {
  const [errImg, setErrImg] = useState(false);
  const {detailCategory} = useSelector(state => state);
  const dataState = useSelector(state => state);

  const type = detailCategory.nameCategory;

  // const typeState = useSelector(state => state[`${type}`]);

  const dispatch = useDispatch();

  const handleOrder = id => {
    dispatch(myOrder(id));
    navigation.navigate('Order');
  };

  const nextPage = () => {
    if (dataState[`${type}`].pageInfo.next) {
      dispatch(
        getCategory(
          type.toUpperCase(),
          dataState[`${type}`].pageInfo.currentPage + 1,
        ),
      );
    }
  };

  return (
    <>
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        data={dataState[`${type}`].results}
        onEndReachedThreshold={0.2}
        onEndReached={nextPage}
        renderItem={({item, index}) => (
          <>
            <TouchableOpacity
              key={index}
              onPress={() => handleOrder(item.idVehicle)}>
              <VehicleList
                name={item.brand}
                seet={item.capacity}
                stock={item.qty}
                price={item.price}
                Image={() => (
                  <Image
                    alt={item.brand}
                    source={
                      item.image
                        ? !errImg
                          ? {uri: item.image}
                          : require('../assets/images/no-image.jpg')
                        : require('../assets/images/no-image.jpg')
                    }
                    onError={setErrImg}
                    style={styles.img}
                  />
                )}
              />
            </TouchableOpacity>
          </>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listVehicles: {
    flexDirection: 'row',
    marginVertical: 18,
  },
  left: {
    position: 'relative',
    width: '40%',
  },
  img: {
    width: 150,
    height: 120,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  rate: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    borderRadius: 20,
    position: 'absolute',
    right: -18,
    top: -10,
  },
  iconRate: {
    marginLeft: 8,
  },
  right: {
    marginLeft: 35,
    justifyContent: 'space-between',
  },
  bottom: {
    paddingBottom: 40,
  },
});

export default DetailCategory;
