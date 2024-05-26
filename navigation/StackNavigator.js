import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import ChatScreen from '../screens/ChatScreen';
import LikesScreen from '../screens/LikesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BasicInfo from '../screens/BasicInfo';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import GenderScreen from '../screens/GenderScreen';
import BirthdayScreen from '../screens/BirthScreen';
import LocationScreen from '../screens/LocationScreen';
import DatingType from '../screens/DatingType';
import HomeTownScreen from '../screens/HomeTownScreen';
import LookingFor from '../screens/LookingFor';
import PromptScreen from '../screens/PromptScreen';
import PhotoScreen from '../screens/PhotoScreen';
import TypeScreen from '../screens/TypeScreen';
import PrefinalScreens from '../screens/PrefinalScreens';
import ShowPrompts from '../screens/ShowPrompts';
import {AuthContext} from '../AuthContext';
import SendLikeScreen from '../screens/SendLikeScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const {token, isLoading} = useContext(AuthContext);

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle: {backgroundColor: '#101010'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <MaterialCommunityIcons name="alpha" size={35} color="white" />
              ) : (
                <MaterialCommunityIcons
                  name="alpha"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Likes"
          component={LikesScreen}
          options={{
            tabBarStyle: {backgroundColor: '#101010'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo name="heart" size={30} color="white" />
              ) : (
                <Entypo name="heart" size={30} color="#989898" />
              ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarStyle: {backgroundColor: '#101010'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={30}
                  color="white"
                />
              ) : (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarStyle: {backgroundColor: '#101010'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="white"
                />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="BasicInfo"
          component={BasicInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Birth"
          component={BirthdayScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Email"
          component={EmailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={PasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gender"
          component={GenderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LookingFor"
          component={LookingFor}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTown"
          component={HomeTownScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DatingType"
          component={DatingType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TypeScreen"
          component={TypeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Photos"
          component={PhotoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Prompt"
          component={PromptScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShowPrompts"
          component={ShowPrompts}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Prefinal"
          component={PrefinalScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SendLike"
          component={SendLikeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {token === null || token === '' ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
