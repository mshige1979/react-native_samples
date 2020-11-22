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
  ScrollView,
  View,
  Text,
  Button,
  Platform,
  Dimensions,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const App = () => {
  const [modalTop, setModalTop] = useState(new Animated.Value(height));
  const [toastTop, setToastTop] = useState(height);
  const [toastBottom, setToastBottom] = useState(undefined);
  const [toastOpacity, setToastOpacity] = useState(new Animated.Value(0));
  console.log(width, height);

  const duration = 500;

  const openModal = () => {
    Animated.timing(modalTop, {
      toValue: 0,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };
  const closeModal = () => {
    Animated.timing(modalTop, {
      toValue: height,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#DCDCDC',
          paddingTop: Platform.select({
            ios: 50,
            android: 0,
          }),
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#00FFFF',
            padding: 10,
          }}>
          <Text>アニメーションサンプル</Text>
          <Button title="モーダル表示" onPress={openModal} />
        </View>
      </View>

      {/** モーダル表現用 */}
      <Animated.View
        style={{
          position: 'absolute',
          top: modalTop,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#F0F0F0',
            width: width,
            height: height,
          }}
          onPress={closeModal}
          activeOpacity={1}></TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: 100,
            alignSelf: 'center',
            width: 300,
            height: 250,
            borderWidth: 1,
            borderColor: '#121212',
            borderRadius: 30,
            padding: 10,
            backgroundColor: '#FFAAFF',
          }}>
          <Button
            title="閉じる"
            onPress={() => {
              closeModal();
            }}
          />
          <Button
            title="トースト表示（TOP）"
            onPress={() => {
              setToastTop(50);
              setToastBottom(undefined);

              Animated.timing(toastOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
              }).start((event) => {
                if (event.finished) {
                  console.log('top done');
                  Animated.timing(toastOpacity, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                  }).start((event2) => {
                    if (event2.finished) {
                      setToastTop(height);
                    }
                  });
                }
              });
            }}
          />
          <Button
            title="トースト表示(Bottom)"
            onPress={() => {
              setToastTop(undefined);
              setToastBottom(50);

              Animated.timing(toastOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
              }).start((event) => {
                if (event.finished) {
                  console.log('bottom done');
                  Animated.timing(toastOpacity, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                  }).start((event2) => {
                    if (event2.finished) {
                      setToastTop(height);
                    }
                  });
                }
              });
            }}
          />
        </View>
      </Animated.View>

      {/** トースト表現用 */}
      <Animated.View
        style={{
          position: 'absolute',
          top: toastTop,
          bottom: toastBottom,
          alignSelf: 'center',
          opacity: toastOpacity,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#DCDCDC',
            width: width * 0.8,
            //height: 150,
            padding: 20,
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log('toast tap');
            setToastTop(height);
            Animated.timing(toastOpacity).stop();
          }}
          activeOpacity={1}>
          <Text>こんにちは</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
