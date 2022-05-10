import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { Box, Text } from 'native-base';
import Stepper from '../components/Stepper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Rate from '../components/Rate';
import PriceFormat from '../helpers/PriceFormat';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const Payment2 = () => {

  const vehicle = {
    vehicleId: `contoh`,
    userId: `contoh`,
    name: `contoh`,
    seet: 2,
    stock: 5,
    prepayment: `contoh`,
    image: '',
    rating: 4,
    qty: `2`,
    days: 3,
    rentStartDate: '2022-02-02',
    rentEndDate: '2022-02-05',
  };

  const getCode = () => {
    dispatch(getData(vehicle))
    navigation.navigate('Payment3')
  }
  const navigation = useNavigation()

  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Payment
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box py={'10'}>
          <Stepper currentlyActive={2} />
        </Box>
        <Box style={styles.imgWrapper}>
          <Image
            source={vehicle.image}
            style={styles.imageBg}
            alt="photo vehicle"
          />
          <Box>
            <Rate rate={4} right={30} top={-60} />
          </Box>
        </Box>
        <Box py={'10'}>
          <Text py={'1'}>
            {vehicle.qty} {vehicle.name}
          </Text>
          <Text py={'1'}>Prepayment (no tax)</Text>
          <Text py={'1'}>
            {vehicle.days} {vehicle.days === 1 ? 'day' : 'days'}
          </Text>
          <Text py={'1'}>
            {vehicle.rentStartDate} to {vehicle.rentEndDate}
          </Text>
        </Box>
        <View style={styles.borderBtm} />
        <Box style={{ marginVertical: 30 }} flexDirection={'row'} justifyContent="space-between">
          <Text fontSize={'3xl'} bold>
            {/* {PriceFormat(vehicle.prepayment * vehicle.days * counter.value)} */}
          </Text>
          <TouchableOpacity>
            <EntypoIcon name="info-with-circle" size={30} color="#d2dae2" />
          </TouchableOpacity>
        </Box>
        <Box style={{ marginBottom: 25 }}>
          <Button
            title="Get Payment Code"
            color="secondary"
            onPress={getCode}>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  )
}

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgWrapper: {
    backgroundColor: 'rgba(30, 39, 46,1.0)',
    borderRadius: 20,
  },
  imageBg: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    resizeMode: 'cover',
    backgroundColor: 'gray',
  },
  borderBtm: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
})

export default Payment2