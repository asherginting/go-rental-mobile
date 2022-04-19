import React, { useEffect } from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
// import {Provider, useSelector} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import messaging from '@react-native-firebase/messaging';

// import reduxStore from './src/redux/store';

import MainStackNav from './src/navigation/MainStackNav';
// import AuthStackNav from './src/navigation/AuthStackNav';

// import PushNotification from 'react-native-push-notification';

// PushNotification.createChannel({
//   channelId: 'transaction',
//   channelName: 'transaction notification',
//   soundName: 'default',
//   vibrate: true,
// });

const App = () => {
  // const {auth} = useSelector(state => state);
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MainStackNav />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

// const {store, persistor} = reduxStore();

// const App = () => {
//   const getToken = async() => {
//     const token = await messaging().getToken()
//     console.log(token);
//   }
//   useEffect(()=> {
//     getToken()
//   }, []);
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <Main />
//       </PersistGate>
//     </Provider>
//   );
// };

export default App;