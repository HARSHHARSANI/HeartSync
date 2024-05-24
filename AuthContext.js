import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');

  const [isLoading, setIsLoading] = useState('');

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem('token');
      if (userToken) {
        setToken(userToken);
      }
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, [token]);

  return (
    <AuthContext.Provider value={{token, setToken, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
