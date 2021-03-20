import React from 'react';
import {View, Platform, Dimensions, TouchableOpacity} from 'react-native';
import {useAppService} from '../providers/appProvider';

import {Card, ListItem, Button, Text} from 'react-native-elements';

const Counter = () => {
  const {count, setCount} = useAppService();

  return (
    <>
      <View
        style={{
          position: 'absolute',
          right: 10,
          top: Platform.OS === 'ios' ? 50 : 10,
          //padding: 10,
          //zIndex: 10,
        }}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            setCount(count + 1);
          }}>
          <View
            style={{
              //height: 50,
              //width: 100,
              padding: 10,
              backgroundColor: '#CCC',
            }}>
            <Text>Count: {count}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Counter;
