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

const PasswordScreen = () => {
  const [password, setPassword] = useState('asdasd');

  const navigate = useNavigation();

  const handleNext = () => {
    if (password.length > 5) {
      navigate.navigate('Birth', {password: password});
    } else {
      alert('Please Enter Your Password');
    }
  };

  return (
    <SafeAreaView>
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

        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 20,
          }}>
          Please Provide Password
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: 'black',
            padding: 10,
            marginTop: 20,
            fontSize: 20,
          }}
          placeholder="Password"
          placeholderTextColor={'black'}
          autoFocus
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'semibold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 10,
          }}>
          Note : Password should be at least 6 characters long and contain a
          number
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

export default PasswordScreen;

const styles = StyleSheet.create({});
