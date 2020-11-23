/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Animated,
  Button,
  Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 100;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const App = () => {
  const _scrollView = useRef(null);
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    let cardIndex = 0;
    if (Platform.OS === 'ios') {
      mapAnimation.addListener(({value}) => {
        let _value = value;
        if (value < 0) {
          _value = 0;
        }
        //console.log(value);
        let index = Math.floor(_value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
        if (index <= 0) {
          index = 0;
        }

        clearTimeout(regionTimeout);
        const regionTimeout = setTimeout(() => {
          if (cardIndex != index) {
            cardIndex = index;
            cardScroll(index);
          }
        }, 10);
      });

      cardScroll(0);
    }
  });

  const cardScroll = (index) => {
    let x = index * CARD_WIDTH + index * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }
    _scrollView.current.scrollTo({x: x});
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
          <Text>左右フリックでアニメーション</Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.button}>
              <Button
                title="1番目"
                onPress={() => {
                  cardScroll(0);
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="2番目"
                onPress={() => {
                  cardScroll(1);
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="3番目"
                onPress={() => {
                  cardScroll(2);
                }}
              />
            </View>
          </View>
          <Animated.ScrollView
            ref={_scrollView}
            style={{
              position: 'absolute',
              bottom: Platform.OS === 'android' ? 0 : 20,
              left: 0,
              right: 0,
              paddingVertical: 10,
            }}
            horizontal={true}
            pagingEnabled={false}
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={true}
            snapToInterval={CARD_WIDTH + 20}
            snapToAlignment="center"
            contentInset={{
              top: 0,
              left: SPACING_FOR_CARD_INSET,
              bottom: 0,
              right: SPACING_FOR_CARD_INSET,
            }}
            contentContainerStyle={{
              paddingHorizontal:
                Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: mapAnimation,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}>
            <View style={styles.card}>
              <Text>1</Text>
            </View>
            <View style={styles.card}>
              <Text>2</Text>
            </View>
            <View style={styles.card}>
              <Text>3</Text>
            </View>
          </Animated.ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
});

export default App;
