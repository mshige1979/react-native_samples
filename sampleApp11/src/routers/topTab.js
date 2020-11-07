import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TopStackScreen from './top';
import Page3 from '../screens/page3';
import Page4 from '../screens/page4';

const TopTabs = createBottomTabNavigator();
const TopTabsScreen = () => {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen
        name="TopStackScreen"
        component={TopStackScreen}
        listeners={({navigation, route}) => ({
          tabPress: () => {
            console.log('aaaa');
            navigation.navigate('Home');
          },
        })}
      />
      <TopTabs.Screen name="Page3" component={Page3} />
      <TopTabs.Screen name="Page4" component={Page4} />
    </TopTabs.Navigator>
  );
};

export default TopTabsScreen;
