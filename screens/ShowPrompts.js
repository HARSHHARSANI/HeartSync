import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  BottomModal,
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';

const ShowPrompts = () => {
  const navigation = useNavigation();
  const [selectedPrompts, setSelectedPrompts] = useState({});
  const [currentCategory, setCurrentCategory] = useState('About me');
  const [isModelVisible, setIsModelVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [promptAnswer, setPromptAnswer] = useState('');
  const promptss = [
    {
      id: '0',
      name: 'About me',
      questions: [
        {
          id: '10',
          question: 'A random fact I love is',
        },
        {
          id: '11',
          question: 'Typical Sunday',
        },
        {
          id: '12',
          question: 'I go crazy for',
        },
        {
          id: '13',
          question: 'Unusual Skills',
        },
        {
          id: '14',
          question: 'My greatest strength',
        },
        {
          id: '15',
          question: 'My simple pleasures',
        },
        {
          id: '16',
          question: 'A life goal of mine',
        },
      ],
    },
    {
      id: '2',
      name: 'Self Care',
      questions: [
        {
          id: '10',
          question: 'I unwind by',
        },
        {
          id: '11',
          question: 'A boundary of mine is',
        },
        {
          id: '12',
          question: 'I feel most supported when',
        },
        {
          id: '13',
          question: 'I hype myself up by',
        },
        {
          id: '14',
          question: 'To me, relaxation is',
        },
        {
          id: '15',
          question: 'I beat my blues by',
        },
        {
          id: '16',
          question: 'My skin care routine',
        },
      ],
    },
  ];

  const openModel = item => {
    setIsModelVisible(true);
    setQuestion(item.question);
  };

  const handleNext = () => {
    navigation.navigate('Prefinal', {selectedPrompts});
  };

  const handleSelectPrompt = (category, promptId) => {
    setSelectedPrompts(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [promptId]: !prevState[category]?.[promptId],
      },
    }));
  };

  const getQuestionsForCategory = category => {
    return promptss.find(item => item.name === category)?.questions || [];
  };

  const currentPrompts = getQuestionsForCategory(currentCategory);

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              textAlign: 'center',
              marginTop: 20,
            }}>
            View All
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              textAlign: 'center',
              marginTop: 20,
            }}>
            Prompts
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            marginHorizontal: 12,
            flexDirection: 'row',
          }}>
          {promptss.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <Pressable onPress={() => setCurrentCategory(item.name)}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    textAlign: 'center',
                    marginTop: 20,
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor:
                      currentCategory === item.name ? '#581845' : 'white',
                    color: currentCategory === item.name ? 'white' : 'black',
                  }}>
                  {item.name}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        <View>
          {currentPrompts.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginHorizontal: 20,
              }}>
              <Pressable
                onPress={() => openModel(item)}
                style={{
                  width: '100%',
                  backgroundColor: selectedPrompts[currentCategory]?.[item.id]
                    ? '#581845'
                    : 'white',
                  padding: 10,
                  borderRadius: 10,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    color: selectedPrompts[currentCategory]?.[item.id]
                      ? 'white'
                      : 'black',
                  }}>
                  {item.question}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={handleNext}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              textAlign: 'center',
              marginTop: 20,
              color: '#581845',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <BottomModal
        onBackdropPress={() => setIsModelVisible(false)}
        onTouchOutside={() => setIsModelVisible(false)}
        onHardwareBackPress={() => {
          setIsModelVisible(false);
          return true;
        }}
        swipeDirection={['down', 'up']}
        swipeThreshold={200}
        modalTitle={<ModalTitle title="Answer the question" />}
        modalAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        visible={isModelVisible}
        width={0.9}
        height={0.3}>
        <ModalContent>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              textAlign: 'center',
              marginTop: 20,
              color: 'black',
            }}>
            {question}
          </Text>
          <TextInput
            autoFocus
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              placeholder: 'Type your answer here',
              marginHorizontal: 20,
              marginTop: 20,
            }}
            onChangeText={text => setPromptAnswer(text)}
            value={promptAnswer}
          />
          <TouchableOpacity
            title="Save Answer"
            backgroundColor="#581845"
            onPress={() => {
              setIsModelVisible(false);
              setPromptAnswer('');
            }}
            style={{
              padding: 10,
              borderRadius: 15,
              marginTop: 20,
              backgroundColor: '#581845',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'GeezaPro-Bold',
                textAlign: 'center',
                color: 'white',
              }}>
              Save Answer
            </Text>
          </TouchableOpacity>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default ShowPrompts;

const styles = StyleSheet.create({});
