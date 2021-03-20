/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppConteiner from './src/AppContainer';
import {AppProvider} from './src/providers/appProvider';

const App = () => {
  return (
    <AppProvider>
      <AppConteiner />
    </AppProvider>
  );
};

export default App;
