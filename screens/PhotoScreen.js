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
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const PhotoScreen = () => {
  const navigate = useNavigation();
  const [imgUrls, setImgUrls] = useState(['', '', '', '', '', '']);
  const [imageUrl, setImageUrl] = useState('');

  const handleNext = () => {
    navigate.navigate('HomeTown');
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
            <MaterialCommunityIcons name="camera" size={26} color="black" />
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
          Pick Your Photos And Video's
        </Text>

        <View>
          {imgUrls?.slice(0, 3).map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setImageUrl(item);
                }}>
                <Image
                  source={{uri: item}}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 10,
                    marginTop: 20,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            );
          })}
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

export default PhotoScreen;

const styles = StyleSheet.create({});
