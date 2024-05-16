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
import {useNavigation} from '@react-navigation/native';

const GenderScreen = () => {
  const [selectedGender, setSelectedGender] = useState(null);
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
          What's your Gender
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
