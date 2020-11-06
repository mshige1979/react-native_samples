/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import {Card} from './src/components/card';

const App = () => {
  const dataList = [
    {
      name: 'hoge1',
      age: 10,
      description: 'sample1-001',
    },
    {
      name: 'hoge2',
      age: 20,
      description: 'sample1-002',
    },
    {
      name: 'hoge3',
      age: 30,
      description: 'sample1-003',
    },
  ];

  return (
    <View style={styles.conatiner}>
      <View>
        <Text>FlatList出力</Text>
      </View>

      <View>
        <View style={styles.labelBlock}>
          <Text>直接renderしたパターン</Text>
        </View>
        <FlatList
          data={dataList}
          renderItem={({item, index}) => {
            return (
              <TouchableHighlight
                onPress={() => {
                  alert(item.name);
                }}>
                <View key={index} style={styles.renderItem}>
                  <Text>名前: {item.name}</Text>
                  <Text>年齢: {item.age}</Text>
                  <Text>備考: {item.description}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
          keyExtractor={(item, index) => String(index)}
        />
      </View>

      <View>
        <View style={styles.labelBlock}>
          <Text>コンポーネントをrenderしたパターン</Text>
        </View>
        <FlatList
          data={dataList}
          renderItem={Card}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
      <View
        style={{
          margin: 10,
          padding: 0,
        }}>
        <Text>data=リストデータ</Text>
        <Text>renderItemにコンポーネント</Text>
        <Text>keyExtractorに一意のキー文字列を返すコードを実装</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  labelBlock: {
    fontSize: 10,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 10,
  },
  renderItem: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
  },
});

export default App;
