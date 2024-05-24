import React from 'react';
import {SafeAreaView} from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import {ModalPortal} from 'react-native-modals';
import {AuthProvider} from './AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <>
          <StackNavigator />
          <ModalPortal />
        </>
      </AuthProvider>
    </>
  );
};

export default App;
