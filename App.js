import React from 'react';
import {SafeAreaView} from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import {ModalPortal} from 'react-native-modals';

const App = () => {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  );
};

export default App;
