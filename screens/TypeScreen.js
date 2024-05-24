import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../RegisterationUtil';

const TypeScreen = () => {
  const [type, setType] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(true);
  const navigate = useNavigation();

  useEffect(() => {
    getRegistrationProgress('TypeScreen').then(data => {
      if (data) {
        setType(data.type ? data.type : '');
        setIsProfileVisible(data.isProfileVisible);
      }
    });
  }, []);

  const handleNext = () => {
    if (type) {
      saveRegistrationProgress('TypeScreen', {type, isProfileVisible});

      navigate.navigate('DatingType', {type, isProfileVisible});
    } else {
      alert('Please select your sexuality');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather name="type" size={26} color="black" />
          </View>
          <Image
            source={require('../assets/dots.png')}
            style={{
              height: 20,
              width: 60,
              marginHorizontal: 10,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            textAlign: 'center',
            marginTop: 20,
          }}>
          What's Your Sexuality?
        </Text>

        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            marginTop: 10,
            color: 'gray',
          }}>
          Hinge users are matched based on these three preferences. You can
          change these preferences at any time.
        </Text>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
            onPress={() => setType('Straight')}>
            <MaterialCommunityIcons
              name="heart-multiple-outline"
              size={30}
              color={type === 'Straight' ? '#993C4F' : 'gray'}
            />
            <Text style={{fontSize: 18, marginLeft: 20}}>Straight</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
            onPress={() => setType('Gay')}>
            <MaterialCommunityIcons
              name="heart-multiple-outline"
              size={30}
              color={type === 'Gay' ? '#993C4F' : 'gray'}
            />
            <Text style={{fontSize: 18, marginLeft: 20}}>Gay</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
            onPress={() => setType('Lesbian')}>
            <MaterialCommunityIcons
              name="heart-multiple-outline"
              size={30}
              color={type === 'Lesbian' ? '#993C4F' : 'gray'}
            />
            <Text style={{fontSize: 18, marginLeft: 20}}>Lesbian</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
            onPress={() => setType('Bisexual')}>
            <MaterialCommunityIcons
              name="heart-multiple-outline"
              size={30}
              color={type === 'Bisexual' ? '#993C4F' : 'gray'}
            />
            <Text style={{fontSize: 18, marginLeft: 20}}>Bisexual</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              gap: 10,
            }}
            onPress={() => setIsProfileVisible(!isProfileVisible)}>
            <AntDesign
              name={isProfileVisible && 'checksquare'}
              size={30}
              color={'#993C4F'}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#A9A9A9',
              }}>
              {isProfileVisible ? 'Visible on Profile ' : 'Hidden on Profile '}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleNext}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            style={{
              marginTop: 30,
              alignSelf: 'flex-end',
            }}
            color={'#581845'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TypeScreen;

const styles = StyleSheet.create({});
