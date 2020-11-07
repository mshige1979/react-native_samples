/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {AuthProvider} from './src/contexts/authContext';
import IndexScreen from './src/screens/index';

const App = () => {
  return (
    <AuthProvider>
      <IndexScreen />
    </AuthProvider>
  );
};

export default App;
