/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';

import Config from 'react-native-config';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>MODE: {Config.MODE}</Text>
      <Text>APP_NAME: {Config.APP_NAME}</Text>
      <Text>VERSION: {Config.VERSION}</Text>
    </View>
  );
};

export default App;
