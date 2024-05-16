import {
  Image,
  Pressable,
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

const EmailScreen = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigation();

  const handleNext = () => {
    if (email.length > 0) {
      navigate.navigate('Password', {email: email});
    } else {
      alert('Please Enter Your Email');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginTop: 90,
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
            <MaterialCommunityIcons name="email" size={26} color="black" />
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
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 20,
          }}>
          Please Enter Email
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'semibold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 10,
          }}>
          Email Verification Helps us keep your account secure
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: 'black',
            padding: 10,
            marginTop: 20,
            fontSize: 20,
          }}
          placeholder="Email"
          placeholderTextColor={'black'}
          autoFocus
          onChangeText={text => setEmail(text)}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'semibold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 10,
            color: 'red',
          }}>
          Note : You Will be asked to verify your email{' '}
        </Text>
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

export default EmailScreen;

const styles = StyleSheet.create({});
