import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignedInStack from './navigation';
import HomeScreens from './screens/HomeScreens';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
  // return <HomeScreens/>
  return <SignedInStack/>
}

