import {createStore, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import rootReducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(rootReducers, applyMiddleware(logger, thunk));
  const persistor = persistStore(store);

  return {store, persistor};
};
