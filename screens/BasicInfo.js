import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import loveAnimation from '../assets/love.json'; // Correct way to import the JSON file
import {useNavigation} from '@react-navigation/native';

const BasicInfo = () => {
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
          You're one of a kind
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginTop: 10,
          }}>
          You're profile Should be too.
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
          Enter Basic Info
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({});
