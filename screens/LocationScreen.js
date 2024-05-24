import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../RegisterationUtil';

const LocationScreen = () => {
  const [location, setLocation] = useState('');

  const navigate = useNavigation();

  useEffect(() => {
    getRegistrationProgress('Location').then(data => {
      if (data) {
        setLocation(data.location || '');
      }
    });
  }, []);

  const handleNext = () => {
    if (location.length > 0) {
      saveRegistrationProgress('Location', {location: location});
      navigate.navigate('TypeScreen', {location: location});
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
          Where Do You Live?
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            borderBottomWidth: 1,
            borderColor: 'black',
          }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={30}
            color="black"
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Enter your location"
            value={location}
            onChangeText={setLocation}
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: 'GeezaPro-Bold',
            }}
          />
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

export default LocationScreen;

const styles = StyleSheet.create({});
