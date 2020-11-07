import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/home';
import Page1 from '../screens/page1';
import Page2 from '../screens/page2';

const TopStack = createStackNavigator();
const TopStackScreen = () => {
  return (
    <TopStack.Navigator>
      <TopStack.Screen name="Home" component={Home} />
      <TopStack.Screen name="Page1" component={Page1} />
      <TopStack.Screen name="Page2" component={Page2} />
    </TopStack.Navigator>
  );
};

export default TopStackScreen;
