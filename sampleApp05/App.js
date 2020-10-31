/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// 子コンポーネント
import Child from './src/screens/child';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Text>小要素を設定できるコンポーネント作成</Text>
        <View style={styles.childGroup}>
          <Child>
            <View style={styles.childItem}>
              <Text>ssssss</Text>
              <Text>bbbbbb</Text>
            </View>
            <View style={styles.childItem}>
              <Text>cccccc</Text>
              <Text>gggggg</Text>
            </View>
          </Child>
          <Child>
            <View style={styles.childItem}>
              <Text>vvvvvvv</Text>
            </View>
          </Child>
        </View>
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
  },
  childGroup: {
    margin: 10,
    padding: 10,
  },
  childItem: {
    margin: 5,
    padding: 5,
    backgroundColor: 'blue',
    opacity: 0.5,
  },
});

export default App;
