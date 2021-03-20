import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Counter from './components/Counter';
import FooterTabs from './navigations/FooterTabs';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

const AppConteiner = () => {
  return (
    <NavigationContainer>
      <FooterTabs />
      <Counter />
    </NavigationContainer>
  );
};

export default AppConteiner;
