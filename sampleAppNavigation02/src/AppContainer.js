import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  AppState,
  Platform,
} from 'react-native';
import Counter from './components/Counter';
import FooterTabs from './navigations/FooterTabs';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

const AppConteiner = () => {
  const appState = useRef(AppState.currentState);

  /**
   * 初回レンダリング
   */
  useEffect(() => {
    console.log('AppConteiner start');
    AppState.addEventListener('change', _handleAppStateChange);

    // iosの初回起動時はなぜか動作しないため、手動で実行させる
    if (Platform.OS === 'ios') {
      _handleAppStateChange('active');
    }

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  /**
   * アプリ状態の検知
   * @param {*} nextAppState
   */
  const _handleAppStateChange = nextAppState => {
    console.log('nextAppState:', nextAppState);

    // 初回起動時
    if (appState.current.match(/active/) && nextAppState === 'active') {
      console.log('application start');

      // 初期処理
    }

    // 起動後に別タスクからの復帰時
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');

      // 一部のみ初期処理
    }

    // backgroundへ移行時
    if (nextAppState.match(/background/)) {
      console.log('application background');

      // なんかあったらやる
    }

    // ステータス値を更新
    appState.current = nextAppState;
    //console.log('AppState', appState.current);
  };

  return (
    <NavigationContainer>
      <FooterTabs />
      <Counter />
    </NavigationContainer>
  );
};

export default AppConteiner;
