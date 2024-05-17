import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const NameScreen = () => {
  const [firstName, setFirstName] = useState('asdasd');
  const navigate = useNavigation();

  const handleNext = () => {
    if (firstName.length > 0) {
      navigate.navigate('Email', {firstName: firstName});
    } else {
      alert('Please Enter Your Name');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'GeezaPro-Bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        No Background Checks are Conducted
      </Text>
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
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
              name="newspaper-variant-outline"
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
        <View
          style={{
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
            }}>
            Whats Your Name
          </Text>
          <TextInput
            placeholder="Enter your name (Required)"
            placeholderTextColor={'#BEBEBE'}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              fontSize: 20,
              marginTop: 10,
              fontFamily: 'GeezaPro-Bold',
            }}
            value={firstName}
            onChangeText={text => setFirstName(text)}
            autoFocus
          />
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            onPress={handleNext}
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

export default NameScreen;
