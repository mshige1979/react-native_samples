/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import Child from './src/screens/child';

const App = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    console.log('app render');
    return () => {
      console.log('app un render');
    };
  });

  return (
    <View style={styles.container}>
      <View style={[styles.parent]}>
        <Text>親コンポーネント</Text>
        <TextInput style={[styles.input]} value={name} onChangeText={setName} />
        <TextInput style={[styles.input]} value={age} onChangeText={setAge} />
        {/** 子コンポーネント */}
        <Child name={name} age={age} setName={setName} setAge={setAge} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    padding: 5,
  },
});

export default App;
