import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Prpfile';

const Tab = createBottomTabNavigator();

const FooterTabs = () => {
  return (
    <Tab.Navigator navigationOptions={({navigation}) => ({})}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default FooterTabs;
