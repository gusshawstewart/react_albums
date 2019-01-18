import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component
const App = () => (
    <Header />
  );


AppRegistry.registerComponent('albums', () => App);