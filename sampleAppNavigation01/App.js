/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, Platform} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// タブエリア
import AppTabBar from './src/components/AppTabBar';

// サンプルページ
import Home from './src/screens/home';
import Profile from './src/screens/profile';
import MyPage from './src/screens/mypage';

// タブコンポーネント
const TopTabs = createMaterialTopTabNavigator();
const TopTabsScreen = () => {
  const [swipeEnabled, setSwipeEnabled] = useState(true);

  // Profileの場合は左右にスワイプする
  // Profile以外の場合はスワイプしない
  // 参考：https://stackoverflow.com/questions/63611393/react-native-material-top-tab-navigator-swipe-disable-depending-on-screens
  const focusCheck = ({navigation, route}) => ({
    focus: () => {
      console.log('focus: ', route.name);
      setSwipeEnabled(route.name === 'Profile');
    },
  });

  return (
    <TopTabs.Navigator
      swipeEnabled={swipeEnabled} // スワイプによる移動を制御（true: スワイプ移動、false: 移動しない）
      tabBar={(props) => <AppTabBar {...props} />}
      style={{
        marginTop: Platform.select({
          ios: 50,
          android: 0,
        }),
      }}>
      <TopTabs.Screen name="Home" component={Home} listeners={focusCheck} />
      <TopTabs.Screen
        name="Profile"
        component={Profile}
        listeners={focusCheck}
      />
      <TopTabs.Screen name="MyPage" component={MyPage} listeners={focusCheck} />
    </TopTabs.Navigator>
  );
};

// メイン
const App = () => {
  return (
    <>
      <NavigationContainer>
        <TopTabsScreen />
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
