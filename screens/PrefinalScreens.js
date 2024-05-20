import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import loveAnimation from '../assets/love.json'; // Correct way to import the JSON file
import {useNavigation} from '@react-navigation/native';

const PrefinalScreens = () => {
  const navigation = useNavigation();

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
        onPress={() => navigation.navigate('Name')}>
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
