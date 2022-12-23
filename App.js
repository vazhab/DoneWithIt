import React from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import Card from './src/components/Card';

export default function App() {
  return (
    //<WelcomeScreen />
    <View style={styles.main}>
      <Card
        title={'someting for sale'}
        subTitle={'$ 1000'}
        image={require("./assets/jacket.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f8f3f3',
    padding: 20,
    paddingTop: 100,
  },
})