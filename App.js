import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import Screen from './src/components/Screen';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';
import AccountsScreen from './src/screens/AccountsScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import AppText from './src/components/Text';
import AppTextInput from './src/components/TextInput'
import colors from './src/config/colors';
import { Switch } from 'react-native';
import AppPicker from './src/components/Picker';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen'
import ListingEditScreen from './src/screens/ListingEditScreen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) {
      alert('You need to enable permission to access the library')
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.assets[0].uri)
      }
    } catch (error) {
      console.log('Error reading an Image', error);
    }
  }

  return <Screen>
    <Button title='Select Image' onPress={selectImage} />
    {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
  </Screen>
}

const styles = StyleSheet.create({

})

