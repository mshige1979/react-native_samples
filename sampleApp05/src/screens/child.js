import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Child = (props) => {
  return (
    <View style={styles.container}>
      <Text>子コンポーネント</Text>
      <View>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Child;
