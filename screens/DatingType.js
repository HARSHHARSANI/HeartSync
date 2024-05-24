import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../RegisterationUtil';

const DatingType = () => {
  const [datingType, setDatingType] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(true);
  const navigate = useNavigation();

  useEffect(() => {
    getRegistrationProgress('DatingType').then(data => {
      if (data) {
        setDatingType(data.datingType ? data.datingType : '');
        setIsProfileVisible(data.isProfileVisible);
      }
    });
  }, []);

  const handleNext = () => {
    if (datingType) {
      saveRegistrationProgress('DatingType', {
        DatingType: datingType,
        isProfileVisible,
      });
      navigate.navigate('LookingFor', {datingType, isProfileVisible});
    } else {
      alert('Please select who you want to date');
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
            <Feather name="type" size={26} color="black" />
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
          Who Do you want to date?
        </Text>

        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            marginTop: 10,
            color: 'gray',
          }}>
          Select the type of person you are looking to date
        </Text>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text>Men</Text>
            <Pressable
              onPress={() => {
                setDatingType('Men');
              }}>
              <AntDesign
                name="checkcircle"
                size={30}
                color={datingType === 'Men' ? '#581845' : 'gray'}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text>Women</Text>
            <Pressable
              onPress={() => {
                setDatingType('Women');
              }}>
              <AntDesign
                name="checkcircle"
                size={30}
                color={datingType === 'Women' ? '#581845' : 'gray'}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text>Everyone</Text>
            <Pressable
              onPress={() => {
                setDatingType('Everyone');
              }}>
              <AntDesign
                name="checkcircle"
                size={30}
                color={datingType === 'Everyone' ? '#581845' : 'gray'}
              />
            </Pressable>
          </View>
        </View>

        <TouchableOpacity onPress={handleNext}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            style={{
              marginTop: 50,
              alignSelf: 'flex-end',
            }}
            color={'#581845'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DatingType;

const styles = StyleSheet.create({});
