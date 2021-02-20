/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/screens/Home';
import Page1 from './src/screens/Page1';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: (props) => {
              return <Icon size={props.size} name="home" color={props.color} />;
            },
          }}
        />
        <Tab.Screen
          name="Page1"
          component={Page1}
          options={{
            tabBarIcon: (props) => {
              return <Icon size={props.size} name="user" color={props.color} />;
            },
            keyboardHidesTabBar: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
