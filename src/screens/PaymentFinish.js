import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Box, Text} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import PriceFormat from '../helpers/PriceFormat';
import Rate from '../components/Rate';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

const PaymentFinish = ({navigation}) => {
  const [errImg, setErrImg] = useState(false);
  const {addHistory, paymentForm, detailOrder} = useSelector(state => state);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'CLEAR_ADD_HISTORY',
    });
    navigation.navigate('HomeStackNav');
  };

  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={handleClick}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Back to Home
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          textAlign={'center'}
          my="6"
          fontSize={'2xl'}
          color="success.700"
          bold>
          Payment Success!
        </Text>
        <Box style={styles.imgWrapper}>
          <Image
            source={
              addHistory.results.image
                ? !errImg
                  ? {uri: addHistory.results.image}
                  : require('../assets/images/no-image.jpg')
                : require('../assets/images/no-image.jpg')
            }
            style={styles.imageBg}
            alt="photo vehicle"
            onError={setErrImg}
          />
          <Box>
            <Rate rate={4} right={30} top={-60} />
          </Box>
        </Box>
        <Box py={'10'}>
          <Text py={'1'}>
            {detailOrder.qty} {addHistory.results.brand}
          </Text>
          <Text py={'1'}>{paymentForm.payment}</Text>
          <Text py={'1'}>
            {detailOrder.totalDay} {detailOrder.totalDay === 1 ? 'day' : 'days'}
          </Text>
          <Text py={'1'}>
            {moment(addHistory.results.rentStartDate).format('MMM DD YYYY')} to{' '}
            {moment(addHistory.results.rentEndDate).format('MMM DD YYYY')}
          </Text>
        </Box>
        <View style={styles.borderBtm} />
        <Box>
          <Text py={'1'}>ID: {addHistory.results.idHistory}</Text>
          <Text py={'1'}>
            {paymentForm.firsName} ({paymentForm.email})
          </Text>
          <Text py={'1'}>
            {paymentForm.phone}{' '}
            <Text color="success.700" bold>
              Active
            </Text>
          </Text>
          <Text py={'1'}>{paymentForm.address}</Text>
        </Box>
        <Box my="10">
          <Button color="primary" title="Total" onPress={handleClick}>
            Total: {PriceFormat(addHistory.results.prepayment)}
          </Button>
        </Box>
        <Box mb="20" />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
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
    marginBottom: 30,
  },
});

export default PaymentFinish;
