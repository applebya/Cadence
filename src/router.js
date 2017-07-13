import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './containers/Home'

export default StackNavigator({
  'Home': { screen: HomeScreen },
  // Profile: { screen: ProfileScreen },
})