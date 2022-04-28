/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Navigations from '../Navigations';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar backgroundColor='#010836' barStyle='light-content' />
      <Navigations />
    </SafeAreaView>
  );
};

export default App;
