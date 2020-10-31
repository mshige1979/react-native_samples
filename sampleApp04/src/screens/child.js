import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

// 孫コンポーネント
import GrandChild from './grandChild';

const Child = (props) => {
  return (
    <View style={[styles.container]}>
      <Text>子コンポーネント</Text>
      <View>
        <TextInput
          style={[styles.input]}
          value={props.name}
          onChangeText={props.setName}
        />
        <TextInput
          style={[styles.input]}
          value={props.age}
          onChangeText={props.setAge}
        />
      </View>

      {/** 孫コンポーネント */}
      <GrandChild {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    padding: 5,
  },
});

export default Child;
