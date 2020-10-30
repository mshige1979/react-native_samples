/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

// 子コンポーネントをインポート
import Child from './src/screens/child';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={[styles.container]}>
      <View style={[styles.parent]}>
        <Text>親コンポーネント</Text>

        <View>
          <Text>子コンポーネントへ伝搬する値の入力</Text>
          <View style={[styles.rowGroup]}>
            <Text style={styles.label}>お名前：</Text>
            <TextInput
              style={[styles.input]}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={[styles.rowGroup]}>
            <Text style={styles.label}>年齢：</Text>
            <TextInput
              style={[styles.input]}
              value={age}
              onChangeText={setAge}
            />
          </View>
        </View>

        {/* 子コンポーネントを定義 */}
        <Child name={name} age={age} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    margin: 10,
    padding: 10,
    borderColor: 'red',
    borderWidth: 1,
  },
  label: {
    margin: 10,
    padding: 10,
    width: '22%',
  },
  rowGroup: {
    flexDirection: 'row',
  },
  input: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    width: '60%',
  },
});

export default App;
