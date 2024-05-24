import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  useEffect(() => {
    showToken();
  }, []);

  const showToken = async () => {
    console.log('Token: ', await AsyncStorage.getItem('token'));
  };

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
