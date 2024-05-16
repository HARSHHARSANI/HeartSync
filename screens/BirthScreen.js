import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const BirthScreen = () => {
  const navigate = useNavigation();
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const isValidDay = day =>
    day.length === 2 && parseInt(day) > 0 && parseInt(day) <= 31;
  const isValidMonth = month =>
    month.length === 2 && parseInt(month) > 0 && parseInt(month) <= 12;
  const isValidYear = year =>
    year.length === 4 && parseInt(year) <= new Date().getFullYear();

  const handleNext = () => {
    if (isValidDay(day) && isValidMonth(month) && isValidYear(year)) {
      navigate.navigate('Gender', {birth: {day, month, year}});
    } else {
      alert('Please enter a valid date');
    }
  };

  const handleDayChange = text => {
    if (text.length <= 2 && /^[0-9]*$/.test(text)) {
      setDay(text);
      if (text.length === 2 && isValidDay(text)) {
        monthRef.current.focus();
      }
    }
  };

  const handleMonthChange = text => {
    if (text.length <= 2 && /^[0-9]*$/.test(text)) {
      setMonth(text);
      if (text.length === 2 && isValidMonth(text)) {
        yearRef.current.focus();
      }
    }
  };

  const handleYearChange = text => {
    if (text.length <= 4 && /^[0-9]*$/.test(text)) {
      setYear(text);
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
          What's your Date of Birth
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
            gap: 10,
          }}>
          <TextInput
            autoFocus={true}
            placeholder="DD"
            maxLength={2}
            keyboardType="numeric"
            value={day}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              marginTop: 20,
              width: 50,
              fontSize: 20,
            }}
            onChangeText={handleDayChange}
          />
          <TextInput
            placeholder="MM"
            maxLength={2}
            keyboardType="numeric"
            value={month}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              marginTop: 20,
              width: 60,
              fontSize: 20,
            }}
            ref={monthRef}
            onChangeText={handleMonthChange}
          />
          <TextInput
            placeholder="YYYY"
            maxLength={4}
            keyboardType="numeric"
            value={year}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              marginTop: 20,
              width: 70,
              fontSize: 20,
            }}
            ref={yearRef}
            onChangeText={handleYearChange}
          />
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

export default BirthScreen;

const styles = StyleSheet.create({});
