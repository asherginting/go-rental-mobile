import {FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Box, Image, Text} from 'native-base';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import PriceFormat from '../helpers/PriceFormat';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFavorite} from '../redux/actions/favorite';
import {myOrder} from '../redux/actions/transaction';

const Favorite = ({navigation}) => {
  const [errImg, setErrImg] = useState(false);

  const {favorite: favoriteState} = useSelector(state => state);

  const dispatch = useDispatch();

  const handleDelete = id => {
    const filterFav = favoriteState.results.filter(
      data => data.idVehicle !== id,
    );
    dispatch(deleteFavorite(filterFav));
    console.log(id);
    console.log();
    console.log(filterFav);
  };

  const handleOrder = id => {
    dispatch(myOrder(id));
    navigation.navigate('Order');
  };

  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Your Favorite
        </Text>
      </TouchableOpacity>
      {favoriteState.results?.length > 0 && (
        <Text color={'gray.500'} my="5" textAlign={'center'}>
          Tap love to unlike
        </Text>
      )}
      <Box style={styles.listWrapper}>
        {favoriteState.results?.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={favoriteState.results}
            renderItem={({item, index}) => (
              <Box
                justifyContent={'space-between'}
                alignItems="center"
                flexDirection="row">
                <TouchableOpacity
                  style={styles.listVehicles}
                  onPress={() => handleOrder(item.idVehicle)}>
                  <View style={styles.left}>
                    <Image
                      source={
                        item.image
                          ? !errImg
                            ? {uri: item.image}
                            : require('../assets/images/no-image.jpg')
                          : require('../assets/images/no-image.jpg')
                      }
                      alt="photo product"
                      resizeMode={'cover'}
                      width={130}
                      height={100}
                      borderRadius={30}
                      onError={setErrImg}
                      style={styles.image}
                    />
                  </View>
                  <Box style={styles.right} ml="5">
                    <Text fontSize={'lg'} bold>
                      {item.brand}
                    </Text>
                    <Text>
                      {moment(item.rentStart).format('MMM DD')} to{' '}
                      {moment(item.rentStart)
                        .add(item.totalDay)
                        .format('MMM DD YYYY')}
                    </Text>
                    {item.payment ? (
                      <Text bold>Prepayment: {PriceFormat(item.payment)}</Text>
                    ) : (
                      <Text bold>No prepayment</Text>
                    )}
                    <Text color={'#0085DF'} bold>{item.location}</Text>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.badgeDelete}
                  onPress={() => handleDelete(item.idVehicle)}>
                  <AntIcon name="heart" color={'#0085DF'} size={30} />
                </TouchableOpacity>
              </Box>
            )}
          />
        ) : (
          <Box my="20">
            <Text textAlign={'center'} fontSize="xl" bold>
              Empty
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  listWrapper: {
    paddingBottom: 200,
  },
  listVehicles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
    width: '90%',
  },
});

export default Favorite;
