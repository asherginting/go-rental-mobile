import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import priceFormat from '../helpers/PriceFormat';

const VehicleList = ({Image, name, seet, stock, price, ...set}) => {
  return (
    <View style={styles.listVehicles}>
      <View style={styles.left}>
        <Image />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#0085DF', '#39A1E7', '#0085DF']}
          style={styles.rate}>
          <Text bold color="white" fontSize={'md'}>
            4.5
          </Text>
          <FaIcon name="star" color="white" size={20} style={styles.iconRate} />
        </LinearGradient>
      </View>
      <View style={styles.right}>
        <View>
          <Text fontSize={'lg'} bold>
            {name}
          </Text>
          <Text>Max for {seet} person</Text>
          <Text>2.1 km from your location</Text>
          {stock <= 2 ? (
            <Text bold color="#d63031">
              {stock} vehicles left
            </Text>
          ) : (
            <Text bold color="#0085DF">
              Available
            </Text>
          )}
        </View>
        <Text fontSize={'lg'} bold style={styles.price}>
          {priceFormat(price)}/day
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listVehicles: {
    flexDirection: 'row',
    marginVertical: 18,
    marginTop: 40,
  },
  left: {
    position: 'relative',
    width: '40%',
  },
  image: {},
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
});

export default VehicleList;
