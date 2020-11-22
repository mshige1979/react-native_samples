/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
  Modal,
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  console.log(height);
  console.log(width);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          title="モーダルを開く"
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          //onRequestClose={() => {
          //  Alert.alert('Modal has been closed.');
          //}}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.centeredView]}
            onPress={(event) => {
              console.log('おや');
              setModalVisible(false);
            }}></TouchableOpacity>
          <View style={[styles.modalView]}>
            <Text>sample</Text>
            <Image
              source={require('./assets/img/kaisya_woman_bad.png')}
              style={{
                width: width * 0.4,
                height: 200,
                //borderWidth: 1,
                borderColor: '#000000',
              }}
              resizeMode="contain"
            />
            <Button
              title="閉じる"
              onPress={() => {
                console.log('こ');
                setModalVisible(false);
              }}
            />
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 22,
    backgroundColor: '#CCC',
    opacity: 0.7,
  },
  modalView: {
    position: 'absolute',
    alignSelf: 'center',
    top: height / 5,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default App;
