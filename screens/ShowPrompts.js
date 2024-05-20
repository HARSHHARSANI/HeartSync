import {useNavigation, useRoute} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {BottomModal, ModalContent, SlideAnimation} from 'react-native-modals';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ShowPrompts = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [option, setOption] = useState('About me');
  const [answer, setAnswer] = useState('');
  const [isModelVisible, setIsModelVisible] = useState(false);
  const [prompts, setPrompts] = useState([]);
  const [answeredPrompts, setAnsweredPrompts] = useState([]);
  const [question, setQuestion] = useState('');

  const promptss = [
    {
      id: '0',
      name: 'About me',
      questions: [
        {id: '10', question: 'A random fact I love is'},
        {id: '11', question: 'Typical Sunday'},
        {id: '12', question: 'I go crazy for'},
        {id: '13', question: 'Unusual Skills'},
        {id: '14', question: 'My greatest strength'},
        {id: '15', question: 'My simple pleasures'},
        {id: '16', question: 'A life goal of mine'},
      ],
    },
    {
      id: '2',
      name: 'Self Care',
      questions: [
        {id: '10', question: 'I unwind by'},
        {id: '11', question: 'A boundary of mine is'},
        {id: '12', question: 'I feel most supported when'},
        {id: '13', question: 'I hype myself up by'},
        {id: '14', question: 'To me, relaxation is'},
        {id: '15', question: 'I beat my blues by'},
        {id: '16', question: 'My skin care routine'},
      ],
    },
  ];

  useEffect(() => {
    setPrompts(promptss[0].questions);
  }, []);

  useEffect(() => {
    if (answeredPrompts.length >= 3) {
      navigation.navigate('Prompt', {prompts: answeredPrompts});
    }
  }, [answeredPrompts, navigation]);

  const openModel = item => {
    setIsModelVisible(true);
    setQuestion(item?.question);
  };

  const addPrompt = () => {
    const newPrompt = {question, answer};
    setAnsweredPrompts(prevAnsweredPrompts => [
      ...prevAnsweredPrompts,
      newPrompt,
    ]);
    setIsModelVisible(false);
    setQuestion('');
    setAnswer('');
  };

  console.log(answeredPrompts, 'answeredPrompts');

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 50,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              textAlign: 'center',
            }}>
            About Me
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              textAlign: 'center',
            }}>
            Prompts
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: 20,
            marginTop: 20,
            height: 50,
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          {promptss.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => {
                setPrompts(item.questions);
                setOption(item.name);
              }}
              style={{
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'GeezaPro-Bold',
                  textAlign: 'center',
                  padding: 11,
                  borderRadius: 20,
                  backgroundColor: option === item.name ? '#581845' : 'white',
                  color: option === item.name ? 'white' : 'black',
                }}>
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>
        <View>
          {prompts.map((item, index) => (
            <Pressable
              style={{
                marginTop: 10,
                marginHorizontal: 10,
                width: '90%',
                alignSelf: 'center',
              }}
              key={index}
              onPress={() => {
                openModel(item);
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'GeezaPro-Bold',
                  textAlign: 'left',
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  color: 'black',
                }}>
                {item.question}
              </Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
      <BottomModal
        onHardwareBackPress={() => {
          setIsModelVisible(false);
        }}
        onSwipeOut={() => {
          setIsModelVisible(false);
        }}
        visible={isModelVisible}
        onBackdropPress={() => {
          setIsModelVisible(false);
        }}
        swipeDirection={['down', 'up']}
        modalAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        height={300}>
        <ModalContent>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'GeezaPro-Bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              Answer Your Question
            </Text>

            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
                fontFamily: 'GeezaPro-Bold',
                textAlign: 'center',
                marginTop: 20,
              }}>
              {question}
            </Text>
            <View
              style={{
                borderColor: '#202020',
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                height: 100,
                marginVertical: 20,
                borderStyle: 'dashed',
              }}>
              <TextInput
                placeholder="Enter your answer"
                value={answer}
                onChangeText={setAnswer}
                style={{
                  fontSize: 16,
                  fontFamily: 'GeezaPro-Bold',
                }}
              />
            </View>
            <Pressable
              onPress={addPrompt}
              style={{
                marginBottom: 20,
              }}>
              <AntDesign
                name="checkcircle"
                size={30}
                color="green"
                style={{
                  alignSelf: 'flex-end',
                  marginTop: 10,
                }}
              />
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default ShowPrompts;

const styles = StyleSheet.create({});
