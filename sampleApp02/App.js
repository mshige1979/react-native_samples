/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View style={[styles.container]}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'blue',
        }}>
        <Text style={[styles.text]}>表示する値：</Text>
        <Text style={[styles.text, styles.output]}>{text}</Text>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'green',
        }}>
        <Text style={[styles.text]}>表示する値2：</Text>
        <Text style={[styles.text, styles.output]}>{text}</Text>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'red',
        }}>
        <Text style={[styles.text]}>入力する値：</Text>
        <TextInput
          style={[styles.text, styles.input]}
          value={text}
          onChangeText={setText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
  },
  input: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#CCC',
    color: '#000000',
  },
  output: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default App;
