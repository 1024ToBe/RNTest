/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FlatList from './TestDemo/FlatList';
import ActivityIndicator01 from './TestDemo/ActivityIndicator01';
import NetTest from './TestDemo/Common/NetTest';
import SaveData from './TestDemo/Common/DataStore';
import LoginPage from './js/page/LoginPage';

export default function App() {
  return (
    <LoginPage/>
  );
}
