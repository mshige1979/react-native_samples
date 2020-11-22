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
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const App = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(undefined);
  const [left, setLeft] = useState(10);
  const [right, setRight] = useState(undefined);

  const [toastTop, setToastTop] = useState(-100);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#CCC',
          position: 'relative',
          //margin: 10,
        }}>
        <StatusBar barStyle="dark-content" />
        <View
          style={{
            flex: 1,
            backgroundColor: '#EEEE00',
          }}>
          <View
            style={{
              //position: 'relative',
              position: 'absolute',
              top: top,
              left: left,
              bottom: bottom,
              right: right,
            }}>
            <Text>移動するテキスト</Text>
          </View>
          <View
            style={{
              //flex: 1,
              position: 'relative',
              //backgroundColor: '#CCC',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                title="左上へ移動"
                onPress={() => {
                  setTop(10);
                  setLeft(10);
                  setBottom(undefined);
                  setRight(undefined);
                }}
              />
              <Button
                title="右上へ移動"
                onPress={() => {
                  setTop(10);
                  setLeft(undefined);
                  setBottom(undefined);
                  setRight(10);
                }}
              />
              <Button
                title="左下へ移動"
                onPress={() => {
                  setTop(undefined);
                  setLeft(10);
                  setBottom(10);
                  setRight(undefined);
                }}
              />
              <Button
                title="右下へ移動"
                onPress={() => {
                  setTop(undefined);
                  setLeft(undefined);
                  setBottom(10);
                  setRight(10);
                }}
              />
              <Button
                title="秘密"
                onPress={() => {
                  setToastTop(100);
                  setTimeout(() => {
                    setToastTop(-100);
                  }, 3000);
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: toastTop,
          backgroundColor: '#CCCCCC',
          padding: 20,
          borderWidth: 1,
          borderColor: '#000000',
          borderRadius: 30,
        }}>
        <Text>裏に隠していた画面</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
