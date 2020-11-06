/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('render');
    const _list = [];
    for (let i = 0; i < 20; i++) {
      _list.push({
        name: 'hoge' + i,
        age: 10 + i,
        description: 'foo' + i,
      });
    }
    setList(_list);

    return () => {
      console.log('unrender');
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      {list.map((item, index) => {
        return (
          <View key={index} style={styles.card}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.description}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollArea: {
    marginTop: 10,
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    margin: 5,
  },
});

export default App;
