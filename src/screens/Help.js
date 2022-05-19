import {TouchableOpacity, StyleSheet} from 'react-native';
import {Box, Image, Text} from 'native-base';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Help = ({navigation}) => {
  
  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Help
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default Help;
