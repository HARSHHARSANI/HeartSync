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

const LookingFor = () => {
  const navigate = useNavigation();

  const [lookingFor, setLookingFor] = useState('Life Partner');
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
          What's your dating intention?
        </Text>

        <View>
          <TouchableOpacity
            onPress={() => setLookingFor('Friends')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
              backgroundColor: lookingFor === 'Friends' ? '#FFC0CB' : 'white',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontFamily: 'GeezaPro-Bold'}}>
              Friends
            </Text>
            {lookingFor === 'Friends' && (
              <MaterialCommunityIcons
                name="check"
                size={30}
                color={'#581845'}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLookingFor('Casual')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
              backgroundColor: lookingFor === 'Casual' ? '#FFC0CB' : 'white',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontFamily: 'GeezaPro-Bold'}}>
              Casual
            </Text>
            {lookingFor === 'Casual' && (
              <MaterialCommunityIcons
                name="check"
                size={30}
                color={'#581845'}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLookingFor('Dating')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
              backgroundColor: lookingFor === 'Dating' ? '#FFC0CB' : 'white',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontFamily: 'GeezaPro-Bold'}}>
              Dating
            </Text>
            {lookingFor === 'Dating' && (
              <MaterialCommunityIcons
                name="check"
                size={30}
                color={'#581845'}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLookingFor('Networking')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
              backgroundColor:
                lookingFor === 'Networking' ? '#FFC0CB' : 'white',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontFamily: 'GeezaPro-Bold'}}>
              Networking
            </Text>
            {lookingFor === 'Networking' && (
              <MaterialCommunityIcons
                name="check"
                size={30}
                color={'#581845'}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLookingFor('Life Partner')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
              backgroundColor:
                lookingFor === 'Life Partner' ? '#FFC0CB' : 'white',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontFamily: 'GeezaPro-Bold'}}>
              Life Partner
            </Text>
            {lookingFor === 'Life Partner' && (
              <MaterialCommunityIcons
                name="check"
                size={30}
                color={'#581845'}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLookingFor('Not Sure Lets See')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
              backgroundColor:
                lookingFor === 'Not Sure Lets See' ? '#FFC0CB' : 'white',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontFamily: 'GeezaPro-Bold'}}>
              Not Sure Lets See
            </Text>
            {lookingFor === 'Not Sure Lets See' && (
              <MaterialCommunityIcons
                name="check"
                size={30}
                color={'#581845'}
              />
            )}
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

export default LookingFor;

const styles = StyleSheet.create({});
