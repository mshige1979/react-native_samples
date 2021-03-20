import React, {useEffect, useRef} from 'react';
import {View, Text, Button, TouchableOpacity, AppState} from 'react-native';
import Counter from './components/Counter';
import FooterTabs from './navigations/FooterTabs';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

const AppConteiner = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }

    console.log('AppState nextAppState:', nextAppState);
    console.log('AppState', appState.current);
  };

  return (
    <NavigationContainer>
      <FooterTabs />
      <Counter />
    </NavigationContainer>
  );
};

export default AppConteiner;
