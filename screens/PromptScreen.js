import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation, useRoute} from '@react-navigation/native';

const PromptScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (route.params?.selectedOptions) {
      setSelectedOptions(route.params.selectedOptions);
      setAnswers(route.params.answers || {});
    }
  }, [route.params]);

  const handleNext = () => {
    navigation.navigate('ShowPrompts', {
      selectedOptions,
      answers,
    });
  };

  const handleSelectPrompt = () => {
    navigation.navigate('ShowPrompts', {
      selectedOptions,
      answers,
    });
  };

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
          Write Your Profile Answers
        </Text>

        {selectedOptions.length === 0 ? (
          <View style={{marginTop: 20}}>
            {[
              'Select prompts to answer',
              'Select prompts to answer',
              'Select prompts to answer',
            ].map((text, index) => (
              <TouchableOpacity key={index} onPress={handleSelectPrompt}>
                <View style={styles.promptPlaceholder}>
                  <Text style={styles.promptPlaceholderText}>{text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.answersContainer}>
            {selectedOptions.map((option, index) => (
              <View key={index} style={styles.selectedOption}>
                <Text style={styles.selectedOptionText}>{option}</Text>
                <Text style={styles.answerText}>
                  {answers[option] || 'No answer provided'}
                </Text>
              </View>
            ))}
          </View>
        )}

        {route.params?.prompts ? (
          <View style={styles.optionsContainer}>
            {route.params.prompts.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  {
                    backgroundColor: selectedOptions.includes(option)
                      ? '#FFC0CB'
                      : 'white',
                  },
                ]}
                onPress={() => toggleOption(option)}>
                <Text
                  style={{
                    color: selectedOptions.includes(option) ? 'white' : 'black',
                    fontWeight: 'bold',
                  }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text style={{marginTop: 20, textAlign: 'center', color: '#A0A0A0'}}>
            No prompts available
          </Text>
        )}

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
    width: '45%',
    alignItems: 'center',
  },
  promptPlaceholder: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
  },
  promptPlaceholderText: {
    textAlign: 'center',
    color: '#A0A0A0',
    fontSize: 16,
  },
  answersContainer: {
    marginTop: 20,
  },
  selectedOption: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFC0CB',
    marginBottom: 10,
  },
  selectedOptionText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  answerText: {
    marginTop: 5,
    color: '#333',
  },
});
