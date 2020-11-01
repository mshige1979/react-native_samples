/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');
  const [cardList, setCardList] = useState([]);

  const onSendMessage = () => {
    if (message === '') {
      return;
    }

    cardList.push({
      name: '匿名さん',
      time: '2020/11/01 11:00',
      message: message,
    });
    setMessage('');
  };
  const onClear = () => {
    setCardList([]);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {cardList.map((card, index) => {
          return (
            <View style={styles.box} key={index}>
              <View style={styles.nameAndTime}>
                <Text style={styles.name}>{card.name}</Text>
                <Text style={styles.time}>{card.time}</Text>
              </View>
              <Text>{card.message}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
        />
        <Button title="送信" onPress={onSendMessage} />
        <Button title="全クリア" onPress={onClear} />
      </View>
    </KeyboardAvoidingView>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  boxes: {
    marginTop: 30,
    height: height - 85,
  },
  box: {
    backgroundColor: 'white',
    width: width - 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 3, height: 3 },
    marginBottom: 10,
  },
  nameAndTime: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    color: '#666',
    marginLeft: 20,
  },
  footer: {
    backgroundColor: 'white',
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '70%',
    paddingHorizontal: 10,
    backgroundColor: '#e4fbff',
    borderColor: '#00cbe9',
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

export default App;
