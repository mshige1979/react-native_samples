/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Dimensions,
  FlatList,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

const App = () => {
  const [list, setList] = useState([]);

  const _scrollViewRef = useRef(null);
  const _flatListRef = useRef(null);

  const _list2 = [];
  for (let i = 0; i < 20; i++) {
    _list2.push({
      name: 'hoge' + (i + 1),
    });
  }

  useEffect(() => {
    console.log('11111');
    setList(_list2);

    return () => {
      console.log('aaaaa');
    };
  }, []);

  const btn = () => {
    _scrollViewRef.current.scrollTo({y: 0});
    const _list = [];
    for (let i = 0; i < 12; i++) {
      _list.push({
        name: 'foo' + (i + 1),
      });
    }
    setList(_list);
    console.log(list);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          margin: 10,
        }}>
        <View>
          <Text>横スクロール</Text>
        </View>
        <View>
          <ScrollView horizontal={true} ref={_scrollViewRef}>
            {list.map((item, index) => {
              return (
                <View key={index} style={styles.card}>
                  <Text>{item.name}</Text>
                </View>
              );
            })}
          </ScrollView>
          <Button title="リスト更新" onPress={btn} />
        </View>
      </View>
      <View
        style={{
          padding: 10,
          margin: 10,
        }}>
        <View>
          <Text>FlatList横スクロール</Text>
        </View>
        <View>
          <FlatList
            data={list}
            renderItem={({item, index}) => {
              return (
                <TouchableHighlight
                  onPress={() => {
                    alert(item.name);
                  }}>
                  <View key={index} style={styles.card}>
                    <Text>名前: {item.name}</Text>
                    <Text>年齢: {item.age}</Text>
                    <Text>備考: {item.description}</Text>
                  </View>
                </TouchableHighlight>
              );
            }}
            horizontal={true}
            ref={_flatListRef}
            keyExtractor={(item, index) => String(index)}
          />
          <Button
            title="リスト更新"
            onPress={() => {
              _flatListRef.current.scrollToIndex({index: 5});
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: width * 0.95,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    padding: 10,
  },
});

export default App;
