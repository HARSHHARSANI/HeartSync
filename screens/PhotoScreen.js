import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

const PhotoScreen = () => {
  const navigation = useNavigation();
  const [imgUrls, setImgUrls] = useState(['', '', '', '', '', '']);
  const [imageUrl, setImageUrl] = useState('');

  const handleNext = () => {
    navigation.navigate('Prompt', {
      imageUrl,
    });
  };

  const handleSelectImage = index => {
    launchImageLibrary({mediaType: 'photo', mediaType: 'video'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const selectedImage = response.assets[0].uri;
        const newImgUrls = [...imgUrls];
        newImgUrls[index] = selectedImage;
        setImgUrls(newImgUrls);
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
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
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            {imgUrls?.slice(0, 6).map((item, index) =>
              item ? (
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
              ) : (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleSelectImage(index);
                  }}>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 10,
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      marginTop: 20,
                      backgroundColor: 'lightgrey',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Entypo name="plus" size={30} color="black" />
                  </View>
                </TouchableOpacity>
              ),
            )}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({});
