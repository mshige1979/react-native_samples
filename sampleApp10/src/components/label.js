import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {CommonContext} from '../contexts/commonContext';

const Label = () => {
  const {name, setName} = useContext(CommonContext);

  useEffect(() => {
    console.log('label render');
    return () => {
      console.log('label unmount');
    };
  }, [name]);

  return (
    <View style={styles.labelBlack}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelBlack: {
    padding: 10,
    margin: 10,
    backgroundColor: '#CCC',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    backgroundColor: '#FF11FF',
  },
  label: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
  },
});

export default Label;
