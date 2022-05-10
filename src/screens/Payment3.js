import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Stepper from '../components/Stepper';
import Button from '../components/Button';
import PriceFormat from '../helpers/PriceFormat';
import { useNavigation } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification'
import { useDispatch, useSelector } from 'react-redux';
// import { inputTransaction } from '../redux/actions/transaction';

const Payment3 = () => {

  // const { transaction } = useSelector(state => state)
  // const { auth } = useSelector(state => state)
  // const { detail } = useSelector(state => state)
  // const dispatch = useDispatch()

  const dataOrder = {
    qty: 20,
    name: `test`,
    perpayment: 'no tax',
    days: `10 days`,
    rentStartDate: '2022-02-02',
    rentEndDate: '2022-02-05',
    price: 10,
  }

  const price = dataOrder.price * dataOrder.days * dataOrder.qty

  const inputData = {
    userId: 10,
    vehicleId: 10,
    rentStartDate: `2022-02-02`,
    rentEndDate: `2022-02-05`,
    prepayment: price,
    isReturned: 1
  }
  const paymentFinish = () => {
    dispatch(inputTransaction(auth.token, inputData))
    PushNotification.localNotification({
      channelId: 'payment',
      title: 'Payment Success!',
      message: 'Your vehicle is waiting for you!'
    })
    navigation.navigate('FinishedPayment')
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
            9075632
          </Text>
          <Text>Insert your payment code while you transfer booking order</Text>
          <Text>Pay before:</Text>
          <Text fontSize={'2xl'} py="5" color="red.700" bold>
            06:12:17
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            Bank account information:
          </Text>
          <Text fontSize={'2xl'} py="5" bold>
            1234-5678-9011
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            {/* {detail.vehicle?.name} {detail.vehicle?.loc} */}
          </Text>
          <Box py="5" style={styles.borderBtm} />
          <Text fontSize={'md'} pt="5" bold>
            Booking code:{' '}
            <Text color="success.700" fontSize="lg">
              GR991114
            </Text>
          </Text>
          {/* <Text>Use your booking code to pick your {detail.vehicle?.name}</Text> */}
          <Box style={{ marginBottom: 15 }}>
            <Button fontSize={15} color={'primary'}>
              Copy payment & Booking Code
            </Button>
          </Box>
        </Box>
        <Box>
          <Text fontSize={'lg'}>Order Details:</Text>
          <Text fontSize={'lg'}>
            {dataOrder.qty} {dataOrder.name}
          </Text>
          <Text fontSize={'lg'}>Prepayment (no tax)</Text>
          <Text fontSize={'lg'}>
            {dataOrder.days} {dataOrder.days > 1 ? 'Days' : 'Day'}
          </Text>
          <Text fontSize={'lg'}>Order Details:</Text>
          <Text fontSize={'lg'}>
            {dataOrder.rentStartDate} to {dataOrder.rentEndDate}
          </Text>
          <Box py="5" style={styles.borderBtm} />
        </Box>
        <Box py="5" flexDirection={'row'} justifyContent="space-between">
          <Text fontSize={'3xl'} bold>
            {PriceFormat(dataOrder.price * dataOrder.days * dataOrder.qty)}
          </Text>
          <TouchableOpacity>
            <EntypoIcon name="info-with-circle" size={30} color="#d2dae2" />
          </TouchableOpacity>
        </Box>
        <Button
          title="Finish Payment"
          color="secondary"
          onPress={paymentFinish}>
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
  },
  borderBtm: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
  },
})

export default Payment3