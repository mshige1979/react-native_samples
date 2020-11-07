/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';

import {CommonContext} from './src/contexts/commonContext';
import Label from './src/components/label';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const contextValue = {
    name,
    setName,
  };

  return (
    <CommonContext.Provider value={contextValue}>
      <View style={styles.container}>
        <View>
          <Text>propsを利用せずに値を伝搬する</Text>
        </View>
        <View style={styles.parent}>
          <TextInput
            style={styles.parentText}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.parentText}
            value={age}
            onChangeText={setAge}
          />
          <Label />
        </View>
      </View>
    </CommonContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    margin: 10,
    backgroundColor: '#44FF11',
  },
  parentText: {
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    padding: 2,
  },
});

export default App;
