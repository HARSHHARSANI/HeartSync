import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import loveAnimation from '../assets/love.json'; // Correct way to import the JSON file
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../AuthContext';
import {getRegistrationProgress} from '../RegisterationUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const PrefinalScreens = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({});
  const {token, setToken} = useContext(AuthContext); // Destructuring correctly

  const getAllUserData = async () => {
    try {
      const screens = [
        'Name',
        'Birth',
        'Email',
        'Password',
        'Gender',
        'Location',
        'LookingFor',
        'HomeTown',
        'DatingType',
        'Photo',
        'Prompt',
        'TypeScreen',
      ];

      let combinedUserData = {};

      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        console.log('screenData', screenData);
        if (screenData) {
          combinedUserData = {
            ...combinedUserData,
            ...screenData,
          };
        }
      }

      setUserData(combinedUserData);
      console.log('userData', userData);
    } catch (error) {
      console.log('error', error);
    }
  };

  const clearAllScreensData = async () => {
    try {
      const screens = [
        'Name',
        'Birth',
        'Email',
        'Password',
        'Gender',
        'Location',
        'LookingFor',
        'HomeTown',
        'DatingType',
        'Photos',
        'Prompt',
        'TypeScreen',
      ];

      for (const screenName of screens) {
        await AsyncStorage.removeItem(`registrationProgress${screenName}`);
      }

      console.log('All screens data cleared');
    } catch (error) {
      console.log('error', error);
    }
  };

  const registerUser = async () => {
    try {
      console.log('userData in registerUser', userData);

      const response = await axios.post('http://10.0.2.2:3000/register', {
        userData: userData,
      });

      console.log('response', response);
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      setToken(token);

      clearAllScreensData();
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (token) {
      navigation.replace('MainStack', {
        screen: 'Main',
      });
    }
  }, [token, navigation]);

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 80}}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          All Set To Register
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginTop: 10,
          }}>
          Setting Up Your Profile for you.
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <LottieView
          source={loveAnimation}
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
          }}
          autoPlay
          loop
          speed={0.7}
        />
      </View>

      <Pressable
        style={{
          backgroundColor: '#993C4F',
          padding: 15,
          marginTop: 'auto',
        }}
        onPress={registerUser}>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Finish Registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PrefinalScreens;

const styles = StyleSheet.create({});
