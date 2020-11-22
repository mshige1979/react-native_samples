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
  FlatList,
  RefreshControl,
} from 'react-native';

const App = () => {
  const [refreshFlag, setRefreshFlag] = useState();
  const [list, setList] = useState();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    const num = Math.round(Math.random() * 100);

    const _list = [];
    for (let i = 0; i < num; i++) {
      _list.push({
        name: 'hoge' + String(i),
      });
    }
    setList(_list);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.select({
          ios: 50,
          android: 0,
        }),
      }}>
      <FlatList
        data={list}
        renderItem={({item}) => {
          return (
            <View style={[styles.row]}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshFlag}
            onRefresh={() => {
              console.log('aaaa');
              setRefreshFlag(true);
              setTimeout(() => {
                fetch();
                setRefreshFlag(false);
              }, 3000);
            }}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 5,
  },
});

export default App;
