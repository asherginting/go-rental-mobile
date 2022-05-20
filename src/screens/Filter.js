import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Text} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
// import SwitchSection from '../components/SwitchSection';
import Button from '../components/Button';
import {getFilter} from '../redux/actions/vehicles';

const SearchList = ({navigation}) => {
  const location = [
    'Jakarta',
    'Bali',
    'Bandung',
    'Yogyakarta',
    'Batam',
  ];
  const type = ['Motorbike', 'Car', 'Bike'];

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectRate, setSelectRate] = useState();
  const [sortBy, setSortBy] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const [isPrepayment, setIsPrepayment] = useState(false);
  const [isDeal, setIsDeal] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const dispatch = useDispatch();

  const handleReset = () => {
    setSelectedLocation();
    setSelectRate();
    setDate(new Date());
    setOpen(false);
    setIsPrepayment(false);
    setIsDeal(false);
    setIsAvailable(false);
    setSortBy();
  };

  const handleFilter = () => {
    const dataFilter = {
      search: selectedType || '',
      maximum: max || 0,
      minimum: min || 0,
      location: selectedLocation || '',
      sort: sortBy || '',
      prepayment: isPrepayment || '',
    };
    dispatch(getFilter(dataFilter));
    navigation.navigate('SearchList');
  };

  return (
    <View>
      <View style={styles.backWrapper}>
        <View style={styles.top}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Filter
        </Text>
      </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
            <Text>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.select}>
            <Text color={'black'} fontSize={'xl'}>
              Your Location
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedLocation}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLocation(itemValue)
              }>
              <Picker.Item label="Select" color="gray" />
              {location.map((data, index) => (
                <Picker.Item
                  label={data}
                  value={data}
                  color="black"
                  key={index}
                />
              ))}
              {/* <Picker.Item label={'data'} value={'data'} color="gray" /> */}
            </Picker>
          </View>
          <View style={styles.select}>
            <Text color={'black'} fontSize={'xl'}>
              Sort By
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={sortBy}
              onValueChange={(itemValue, itemIndex) => setSortBy(itemValue)}>
              <Picker.Item label="Select" color="gray" />
              <Picker.Item label="Popular" value={'popular'} color="black" />
              <Picker.Item label="New Vehicle" value={'latest'} color="black" />
            </Picker>
          </View>
          <View style={styles.select}>
            <Text color={'black'} fontSize={'xl'}>
              Min Price
            </Text>
            <View style={[styles.picker, styles.inputWrapper]}>
              <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Rp"
                keyboardType="number-pad"
                onChangeText={setMin}
                value={min}
              />
              {/* <AntIcon name="caretdown" size={10} style={styles.iconInput} /> */}
            </View>
          </View>
          <View style={styles.select}>
            <Text color={'black'} fontSize={'xl'}>
              Max Price
            </Text>
            <View style={[styles.picker, styles.inputWrapper]}>
              <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Rp"
                keyboardType="number-pad"
                onChangeText={setMax}
                value={max}
              />
              {/* <AntIcon name="caretdown" size={10} style={styles.iconInput} /> */}
            </View>
          </View>
          <View style={styles.select}>
            <Text color={'black'} fontSize={'xl'}>
              Type
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedType}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedType(itemValue)
              }>
              <Picker.Item label="Select" color="gray" />
              {type.map((data, index) => (
                <Picker.Item
                  key={index}
                  label={data}
                  value={data}
                  color="black"
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <Button color="primary" title="Apply" onPress={handleFilter}>
            Apply
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // filterScreen
  backWrapper: {
    padding: 20,
    borderBottomColor: '#dcdde1',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    marginRight: 10,
  },
  resetBtn: {
    backgroundColor: '#dcdde1',
    width: '20%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  main: {
    padding: 20,
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  picker: {
    width: '40%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: 17,
    fontSize: 16,
  },
  iconInput: {
    paddingRight: 19,
  },
  btndate: {
    backgroundColor: 'gray',
    color: 'gray',
  },
  textBtn: {
    color: 'gray',
  },
  btnWrapper: {
    marginTop: 50,
    paddingBottom: 150,
  },
});

export default SearchList;
