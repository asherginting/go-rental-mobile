import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import profile from './profile';
import favorite from './favorite';
import signup from './signup';
import verify from './verify';
import forgot from './forgot';
import car from './cars';
import bike from './bike';
import motorBike from './motorBike';
import detailCategory from './detailCategory';
import filterVehicle from './filterVehicle';
import detailVehicle from './detailVehicle';
import addVehicle from './addVehicle';
import myOrder from './myOrder';
import detailOrder from './detailOrder';
import paymentForm from './paymentForm';
import transactionCode from './transactionCode';
import addHistory from './addHistory';
import histories from './histories';
import deleteHistory from './deleteHistory';
import updateProfile from './updateProfile';
import updateVehicle from './updateVehicle';
import deleteVehicle from './deleteVehicle';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistFav = {
  key: 'favorite',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  favorite: persistReducer(persistFav, favorite),
  profile,
  signup,
  verify,
  forgot,
  car,
  bike,
  motorBike,
  detailCategory,
  filterVehicle,
  myOrder,
  detailVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
  detailOrder,
  paymentForm,
  transactionCode,
  addHistory,
  histories,
  deleteHistory,
  updateProfile,

});

export default rootReducers;