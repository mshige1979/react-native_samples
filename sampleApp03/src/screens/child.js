import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import GrandChild from './grandChild';

const Child = (props) => {
  return (
    <View style={[styles.container]}>
      <Text>子コンポーネント</Text>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      {/* 孫コンポーネントを追加 */}
      <GrandChild {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default Child;
