import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../RegisterationUtil';

const GenderScreen = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(true);
  const navigation = useNavigation(); // Corrected the navigation hook

  useEffect(() => {
    getRegistrationProgress('Gender').then(data => {
      if (data) {
        setSelectedGender(data.selectedGender || '');
        setIsProfileVisible(
          data.isProfileVisible !== undefined ? data.isProfileVisible : true,
        );
      }
    });
  }, []);

  const handleNext = () => {
    if (selectedGender) {
      saveRegistrationProgress('Gender', {
        gender: selectedGender,
        isProfileVisible,
      });
      navigation.navigate('Location', {gender: selectedGender});
    } else {
      Alert.alert('Please select your gender');
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
            <MaterialCommunityIcons
              name="cake-variant-outline"
              size={26}
              color="black"
            />
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
          Which Gender Describes You The Best?
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
            gap: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedGender === 'Male' ? '#993C4F' : '#e0e0e0',
              padding: 15,
              borderRadius: 10,
              marginHorizontal: 5,
            }}
            onPress={() => setSelectedGender('Male')}>
            <Text
              style={{
                color: selectedGender === 'Male' ? 'white' : 'black',
                fontSize: 16,
              }}>
              Male
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor:
                selectedGender === 'Female' ? '#993C4F' : '#e0e0e0',
              padding: 15,
              borderRadius: 10,
              marginHorizontal: 5,
            }}
            onPress={() => setSelectedGender('Female')}>
            <Text
              style={{
                color: selectedGender === 'Female' ? 'white' : 'black',
                fontSize: 16,
              }}>
              Female
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor:
                selectedGender === 'Other' ? '#993C4F' : '#e0e0e0',
              padding: 15,
              borderRadius: 10,
              marginHorizontal: 5,
            }}
            onPress={() => setSelectedGender('Other')}>
            <Text
              style={{
                color: selectedGender === 'Other' ? 'white' : 'black',
                fontSize: 16,
              }}>
              Other
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              marginTop: 20,
              color: '#A9A9A9',
            }}>
            You can change this later
          </Text>

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
              name={isProfileVisible ? 'checksquare' : 'checksquareo'}
              size={30}
              color={'#993C4F'}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#A9A9A9',
              }}>
              {isProfileVisible ? 'Visible on Profile' : 'Hidden on Profile'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          style={{alignSelf: 'flex-end', marginTop: 30}}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color={'#581845'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({});
