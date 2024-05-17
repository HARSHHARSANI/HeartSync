import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const GenderScreen = () => {
  const [selectedGender, setSelectedGender] = useState('Male');
  const [isProfileVisible, setIsProfileVisible] = useState(true);
  const navigate = useNavigation();

  const handleNext = () => {
    if (selectedGender) {
      navigate.navigate('Location', {gender: selectedGender});
    } else {
      alert('Please select your gender');
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

export default GenderScreen;

const styles = StyleSheet.create({});
