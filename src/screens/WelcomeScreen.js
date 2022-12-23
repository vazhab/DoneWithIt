import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')} >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo-red.png')} />
        <Text styles={styles.text}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {

  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    alignSelf: "center",
  }
})

export default WelcomeScreen;