import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

const Home = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <View
        style={{
          //flex: 1,
          marginTop: Platform.select({
            android: 0,
            ios: 30,
          }),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Home</Text>
        <View
          style={{
            padding: 10,
            width: '100%',
            height: 100,
          }}>
          <Text>input</Text>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              color: '#FFFFFF',
              backgroundColor: '#000000',
              height: 200,
              padding: 10,
            }}
            keyboardType={
              Platform.OS === 'android' ? 'visible-password' : 'ascii-capable'
            }
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;
