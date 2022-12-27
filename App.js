import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from './src/components/Screen';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';
import AccountsScreen from './src/screens/AccountsScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import AppText from './src/components/AppText';
import AppTextInput from './src/components/AppTextInput'
import colors from './src/config/colors';

export default function App() {
  return (
    <AppTextInput placeholder='Username' />
  );
}

const styles = StyleSheet.create({
  
})

