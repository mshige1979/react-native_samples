import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const GrandChild = (props) => {
  return (
    <View style={[styles.container]}>
      <Text>孫コンポーネント</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'blue',
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

export default GrandChild;
