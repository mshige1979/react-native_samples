import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GrandChild = (props) => {
  return (
    <View style={[styles.container]}>
      <Text>孫コンポーネント</Text>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default GrandChild;
