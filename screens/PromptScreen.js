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
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const PromptScreen = () => {
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleNext = () => {
    navigation.navigate('Photos', {
      selectedOptions,
    });
  };

  const options = [
    'Party Animal',
    'Reading',
    'Fun',
    'Shopping',
    'Hookups',
    'Sports',
    'Traveling',
    'Cooking',
    'Gaming',
    'Music',
    'Art',
  ];

  const toggleOption = option => {
    setSelectedOptions(prevSelectedOptions =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(item => item !== option)
        : [...prevSelectedOptions, option],
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 50, marginHorizontal: 20}}>
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
          Describe Yourself
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Select options that best describe you:
        </Text>

        <View style={styles.optionsContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                {
                  backgroundColor: selectedOptions.includes(option)
                    ? '#993C4F'
                    : '#e0e0e0',
                },
              ]}
              onPress={() => toggleOption(option)}>
              <Text
                style={{
                  color: selectedOptions.includes(option) ? 'white' : 'black',
                  fontSize: 16,
                }}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
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

export default PromptScreen;

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  optionButton: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '45%', // Adjusting width to fit two buttons per row
    alignItems: 'center',
  },
});
