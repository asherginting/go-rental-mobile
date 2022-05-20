import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Box, Text } from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Stepper from '../components/Stepper';
import Button from '../components/Button';
import moment from 'moment';
import {addHistory} from '../redux/actions/history';
import PriceFormat from '../helpers/PriceFormat';
// import { useNavigation } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification'
// import { inputTransaction } from '../redux/actions/transaction';

const Payment3 = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    transactionCode,
    detailOrder,
    addHistory: addHistoryState,
    auth,
    detailVehicle,
    profile,
  } = useSelector(state => state);
  const endDate = moment(
    moment(detailOrder.startDate).add(detailOrder.totalDay, 'days'),
  ).format('MMM DD YYYY');
  const rendEndDate = moment(
    moment(detailOrder.startDate).add(detailOrder.totalDay, 'days'),
  ).format('YYYY-MM-DD');
  // eslint-disable-next-line prettier/prettier
  const totalPrice = detailVehicle.results.price * detailOrder.totalDay * detailOrder.qty;

  useEffect(() => {
    dispatch({
      type: 'CLEAR_ADD_HISTORY',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (addHistoryState.isSuccess) {
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addHistoryState.isSuccess, detailVehicle.results.brand, navigation]);

  const handleSubmit = () => {
    navigation.navigate('PaymentFinish');
    PushNotification.localNotification({
      channelId: 'transaction',
      message: `Yeay! payment success for ${detailVehicle.results.brand}`,
      title: 'Payment Suceess!',
      soundName: 'default',
      vibrate: true,
    });
    dispatch(
      addHistory(
        profile.results.idUser,
        detailVehicle.results.idVehicle,
        moment(detailOrder.startDate).format('YYYY-MM-DD'),
        rendEndDate,
        totalPrice,
        auth.token,
      ),
    );
  };

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
          <Stepper currentlyActive={3} />
        </Box>
        <Box
          justifyContent={'center'}
          flexDirection="column"
          alignItems={'center'}>
          <Text fontSize="lg" bold>
            Payment Code:
          </Text>
          <Text py="4" fontSize={'4xl'} bold>
          {transactionCode.paymentCode}
          </Text>
          <Text>Insert your payment code to transfer booking order</Text>
          <Text>Pay before:</Text>
          <Text fontSize={'2xl'} py="5" color="red.700" bold>
            23:59:99
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            Bank Account Information:
          </Text>
          <Text fontSize={'2xl'} bold>
            1234-5678-9011
          </Text>
          <Text fontSize={'xl'} bold>
            PT. Go Rental Indonesia
          </Text>
          <Text fontSize="md" color="gray.500" bold>
          Order : {detailVehicle.results.brand}{' '}
          </Text>
          <Text fontSize="md" color="gray.500"bold>
          Location : {detailVehicle.results.location}
          </Text>
          <Box py="5" style={styles.borderBtm} />
          <Text fontSize={'md'} pt="5" bold>
            Booking code:{' '}
            <Text color="success.700" fontSize="lg">
            {transactionCode.bookingCode}
            </Text>
          </Text>
          <Text>Use your booking code to pick your {detailVehicle.results.brand}</Text>
          <Button
          title="Copy Payment & Booking Code"
          color="secondary">
          Finish Payment
        </Button>
        </Box>
        <Box>
          <Text fontSize={'lg'}>Order Details:</Text>
          <Text fontSize={'lg'}>
            {detailOrder.qty} {detailVehicle.results.brand}
          </Text>
          <Text fontSize={'lg'}>Prepayment (no tax)</Text>
          <Text fontSize={'lg'}>
          {detailOrder.totalDay} {detailOrder.totalDay > 1 ? 'Days' : 'Day'}
          </Text>
          <Text fontSize={'lg'}>Order Details:</Text>
          <Text fontSize={'lg'}>
          {moment(detailOrder.startDate).format('MMM DD YYYY')} to {endDate}
          </Text>
          <Box py="5" style={styles.borderBtm} />
        </Box>
        <Box py="5" flexDirection={'row'} justifyContent="space-between">
          <Text fontSize={'3xl'} bold>
          {PriceFormat(
              detailVehicle.results.price *
                detailOrder.totalDay *
                detailOrder.qty,
            )}
          </Text>
          <TouchableOpacity>
            <EntypoIcon name="info-with-circle" size={30} color="#d2dae2" />
          </TouchableOpacity>
        </Box>
        <Button
          title="Finish Payment"
          color="secondary"
          onPress={handleSubmit}>
          Finish Payment
        </Button>
        <Box mb={'20'} />
      </ScrollView>
    </Box>
  )
}

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  borderBtm: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
  },
})

export default Payment3;