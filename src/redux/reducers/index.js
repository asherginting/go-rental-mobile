import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import profile from './profile';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  profile,
});

export default rootReducers;