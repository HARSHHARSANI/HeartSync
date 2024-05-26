import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SendLikeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [comment, setComment] = useState('');

  const likeProfile = async () => {
    try {
      if (!comment) {
        return;
      }

      const response = await axios.post('http://10.0.2.2:3000/like-profile', {
        userId: route?.params?.userId,
        likedUserId: route?.params?.id,
        image: route?.params?.image,
        comment: comment,
      });

      console.log(response.data, 'response.data');

      if (response.status === 200) {
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(comment);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#faf9f6',
      }}>
      <View
        style={{
          marginTop: 90,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            textAlign: 'center',
            marginTop: 20,
          }}>
          {route?.params?.name}
        </Text>
        <Image
          source={{uri: route?.params?.image}}
          style={{
            height: 350,
            width: '100%',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}
        />
        <TextInput
          value={comment}
          onChangeText={text => setComment(text)}
          placeholder="Enter Your Comment"
          style={{
            height: 50,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            margin: 10,
            padding: 10,
            marginTop: 20,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#ffc0cb',
              paddingHorizontal: 14,
              paddingVertical: 10,
              gap: 4,
              borderRadius: 22,
            }}>
            <Text>1</Text>
            <Ionicons name="rose" size={30} color="red" />
          </View>
          <Pressable
            style={{
              backgroundColor: '#fffdd0',
              borderRadius: 20,
              flex: 1,
              padding: 10,
            }}
            onPress={likeProfile}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Send Like
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SendLikeScreen;

const styles = StyleSheet.create({});
