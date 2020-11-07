import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TopTabsScreen from './topTab';
import Page5 from '../screens/page5';

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="TopTabsScreen"
        component={TopTabsScreen}
        listeners={({navigation, route}) => ({
          drawerClose: () => {
            console.log('bbbb');
            navigation.navigate('Home');
          },
        })}
      />
      <Drawer.Screen name="Page5" component={Page5} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
