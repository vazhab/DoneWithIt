import React, { useState } from 'react';
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
import { Switch } from 'react-native';
import AppPicker from './src/components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
]

export default function App() {

  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
        icon={"apps"}
        placeholder={"Categories"}
      />
      <AppTextInput
        icon={"email"}
        placeholder='Email' />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

