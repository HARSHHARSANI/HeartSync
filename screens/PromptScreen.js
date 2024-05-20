import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PromptScreen = () => {
  const navigate = useNavigation();
  const route = useRoute();

  const handleNext = () => {
    navigate.navigate('Prefinal');
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
          Write Your Profile Answers
        </Text>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            marginHorizontal: 20,
          }}>
          {route?.params?.prompts ? (
            route.params.prompts.map((item, index) => (
              <Pressable
                style={{
                  marginTop: 20,
                  borderWidth: 2,
                  borderColor: '#707070',
                  borderRadius: 10,
                  width: 260,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                }}
                key={index}
                onPress={() =>
                  navigate.navigate('ShowPrompts', {prompt: item})
                }>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    textAlign: 'center',
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: 'white',
                    color: 'black',
                  }}>
                  {item.question}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    textAlign: 'center',
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: 'white',
                    color: 'black',
                  }}>
                  {item.answer}
                </Text>
              </Pressable>
            ))
          ) : (
            <View>
              <Pressable
                onPress={() => navigate.navigate('ShowPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                  width: 260,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    color: 'black',
                  }}>
                  Select a prompt
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    color: 'black',
                  }}>
                  And wirte your answer
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigate.navigate('ShowPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                  width: 260,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    color: 'black',
                  }}>
                  Select a prompt
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    color: 'black',
                  }}>
                  And wirte your answer
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigate.navigate('ShowPrompts')}
                style={{
                  borderColor: '#707070',
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  height: 70,
                  width: 260,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    color: 'black',
                  }}>
                  Select a prompt
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'GeezaPro-Bold',
                    color: 'black',
                  }}>
                  And wirte your answer
                </Text>
              </Pressable>
            </View>
          )}
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

export default PromptScreen;

const styles = StyleSheet.create({});
