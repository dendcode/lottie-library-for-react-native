import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackActions, NavigationActions  } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

import Main from './pages/main';
import Step01 from './pages/step01';
import Step02 from './pages/step02';
import Step03 from './pages/step03';
import Step04 from './pages/step04';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" headerMode='none'>
          <Stack.Screen name="Main" component={Main}></Stack.Screen>
          <Stack.Screen name="Step01" component={Step01}></Stack.Screen>
          <Stack.Screen name="Step02" component={Step02}></Stack.Screen>
          <Stack.Screen name="Step03" component={Step03}></Stack.Screen>
          <Stack.Screen name="Step04" component={Step04}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}