import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackActions, NavigationActions  } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

import Main from './pages/main';
import Step01 from './pages/step01';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" headerMode='none'>
          <Stack.Screen name="Main" component={Main}></Stack.Screen>
          <Stack.Screen name="Step01" component={Step01}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}