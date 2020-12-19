import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

// 独自タブ
// 参考：https://bagelee.com/programming/react-native/react-navigation-customize/
// 参考：https://reactnavigation.org/docs/material-top-tab-navigator
const AppTabBar = ({state, descriptors, navigation, position}) => {
  const {routes, index} = state;

  const {
    containerStyle,
    tabStyle,
    selectedTabStyle,
    textStyle,
    selectedTextStyle,
  } = styles;

  //console.log(position);
  //console.log(descriptors);

  return (
    <View style={containerStyle}>
      {routes.map((route, idx) => {
        //const inputRange = state.routes.map((_, i) => i);
        //console.log(inputRange);

        // 選択しているタブ
        if (index === idx) {
          return (
            <View key={idx} style={[tabStyle, selectedTabStyle]}>
              <Text style={[textStyle, selectedTextStyle]}>
                {routes[idx].name}
              </Text>
            </View>
          );
        }

        // 他のタブ
        return (
          <TouchableOpacity
            style={tabStyle}
            key={idx}
            onPress={() => {
              // タップしたら他のタブへ切り替え
              navigation.navigate(route.name);
            }}>
            <Animated.Text style={[textStyle]}>
              {routes[idx].name}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = {
  containerStyle: {
    //paddingTop: 30,
    borderBottomWidth: 3,
    borderBottomColor: '#5ab4bd',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fcf6d6',
  },
  tabStyle: {
    flex: 1,
    //marginRight: 1,
    //marginLeft: 1,
    height: 40,
    //borderTopLeftRadius: 16,
    //borderTopRightRadius: 16,
    backgroundColor: '#ffffff',
  },
  selectedTabStyle: {
    backgroundColor: '#5ab4bd',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 14,
  },
  selectedTextStyle: {
    color: '#ffffff',
  },
};

export default AppTabBar;
