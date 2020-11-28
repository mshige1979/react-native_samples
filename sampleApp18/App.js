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
  StatusBar,
  Platform,
  TouchableOpacity,
  Button,
} from 'react-native';

import AccodionList from './src/components/accodionList';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    dataReCreate();
  }, []);

  const dataReCreate = () => {
    let listCnt = Math.floor(Math.random() * 5) + 1;
    const _list = [];
    for (let idx = 0; idx < listCnt; idx++) {
      const itemsCnt = Math.floor(Math.random() * 5) + 1;
      const items = [];
      for (let idx2 = 0; idx2 < itemsCnt; idx2++) {
        items.push({
          name: 'foo' + idx2,
        });
      }
      let item = {
        name: 'hoge' + idx,
        items: items,
      };

      _list.push(item);
    }

    setList(_list);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>アコーディオンメニュー</Text>
        <Button
          title="リスト更新"
          onPress={() => {
            dataReCreate();
          }}
        />
        <View>
          {list.map((item, index) => {
            return <AccodionList key={index} item={item} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  content: {
    marginTop: Platform.select({
      ios: 50,
      android: 0,
    }),
    padding: 10,
  },
});

export default App;
