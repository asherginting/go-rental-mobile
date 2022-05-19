import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Box, Text } from 'native-base';
import Stepper from '../components/Stepper';
import Input from '../components/Input';
import { Picker } from '@react-native-picker/picker';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
  
  const [selectPayment, setSelectPayment] = useState();
  const [isSelect, setIsSelect] = useState(false);
  const navigation = useNavigation()
  const payment = ['Go-Pay', 'Cash', 'Paylater'];

  return (
    <Box p={'3'}>
      <TouchableOpacity style={styles.wrapper} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Payment
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box py={'10'}>
          <Stepper currentlyActive={1} />
        </Box>
        <Box>
          <Input placeholder="ID card Number" type="number-pad" />
        </Box>
        <Box>
          <Input placeholder="Name" />
        </Box>
        <Box>
          <Input
            placeholder="Mobile phone (must be active)"
            type="phone-pad"
          />
        </Box>
        <Box>
          <Input placeholder="Email address" type="email-address"  />
        </Box>
        <Box>
          <Input placeholder="Location (home, office, set)" />
        </Box>
        <Box>
          <Picker
            style={styles.picker}
            selectedValue={selectPayment}
            onValueChange={(itemValue, itemIndex) => {
              setSelectPayment(itemValue);
              setIsSelect(true);
            }}>
            {!isSelect && (
              <Picker.Item
                style={styles.item}
                label="Select Payment"
                color="gray"
              />
            )}
            {payment.map((data, index) => (
              <Picker.Item
                style={styles.item}
                key={index}
                label={data}
                value={data}
                color="gray"
              />
            ))}
          </Picker>
        </Box>
        <Box pt={'50'}>
          <Button
            title= "See Order Details"
            color="secondary"
            onPress={() => navigation.navigate('Payment2')}>
            See Order Details
          </Button>
        </Box>
      </ScrollView>
    </Box>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 40,
  },
  picker: {
    height: 60,
    // backgroundColor: 'rgba(178, 190, 195,0.3)',
    borderRadius: 40,
    fontSize: 20,
    paddingHorizontal: 15,
  },
});

export default Payment