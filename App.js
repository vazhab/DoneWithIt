import React from 'react';
import { View } from 'react-native';
import Screen from './src/components/Screen';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';

export default function App() {
  return (
    <Screen>
      <ListItem
        title={'My Title'}
        // subTitle={'my sub'}
        ImageComponent={<Icon name='email' />}
      />
    </Screen>
  );
}

