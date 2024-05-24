import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {getRegistrationProgress, saveRegistrationProgress} from '../RegisterationUtil';

const HomeTownScreen = () => {
  const [homeTown, setHomeTown] = useState('');

  const navigate = useNavigation();

  useEffect(() => {
    getRegistrationProgress('HomeTown').then(data => {
      if (data) {
        setHomeTown(data.homeTown || '');
      }
    });
  }, []);

  const handleNext = () => {
    if (homeTown.length === 0) {
      alert('Please Enter Your Home Town');
      return;
    }
    saveRegistrationProgress('HomeTown', {homeTown});
    navigate.navigate('Photos', {
      homeTown,
    });
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
            <Entypo name="home" size={26} color="black" />
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
          Where's Your Home Town ?
        </Text>

        <TextInput
          placeholder="Enter your HomeTown"
          value={homeTown}
          onChangeText={setHomeTown}
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            fontSize: 20,
            fontFamily: 'GeezaPro-Bold',
          }}
        />

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

export default HomeTownScreen;

const styles = StyleSheet.create({});
