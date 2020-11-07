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
          drawerClose: (e) => {
            console.log('bbbb');
            console.log(route);
            console.log(e);
            navigation.navigate('Home');
          },
        })}
        onPress={() => {
          console.log('aaaa');
        }}
      />
      <Drawer.Screen name="Page5" component={Page5} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
