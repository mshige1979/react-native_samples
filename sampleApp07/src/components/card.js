import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export const Card = ({item}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        alert(item.name);
      }}>
      <View style={styles.renderItem}>
        <Text>名前2: {item.name}</Text>
        <Text>年齢2: {item.age}</Text>
        <Text>備考2: {item.description}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
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
