import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccodionList = ({item}) => {
  const [open, setOpen] = useState(false);
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0));

  return (
    <View
      style={{
        //
        borderColor: 1,
        borderWidth: 0.5,
        width: '100%',
        //padding: 10,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#4400FF',
          padding: 10,
        }}
        activeOpacity={1}
        onPress={() => {
          let toValue = open ? 0 : 50 * item.items.length;

          Animated.timing(animatedHeight, {
            toValue: toValue,
            duration: 300,
            useNativeDriver: false,
          }).start();

          setOpen(!open);
        }}>
        <Text
          style={{
            color: '#FFFFFF',
          }}>
          {item.name}
        </Text>
        <View
          style={{
            alignItems: 'flex-end',
            top: -10,
          }}>
          {open ? (
            <Icon name="angle-up" size={24} color="#ffffff" />
          ) : (
            <Icon name="angle-down" size={24} color="#ffffff" />
          )}
        </View>
      </TouchableOpacity>
      <Animated.View
        style={{
          height: animatedHeight,
          overflow: 'hidden',
        }}>
        {item.items.map((listItem, listIndex) => {
          return (
            <TouchableOpacity
              key={listIndex}
              style={{
                padding: 10,
                backgroundColor: '#DCDCDC',
                height: 50,
                borderWidth: 1,
                borderColor: '#000000',
              }}>
              <Text>{listItem.name}</Text>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default AccodionList;
