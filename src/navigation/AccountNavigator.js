import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountsScreen'

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator presentation="modal">
    <Stack.Screen name='Account' component={AccountScreen} />
    <Stack.Screen name='Messages' component={MessagesScreen} />
  </Stack.Navigator>
)

export default AccountNavigator;