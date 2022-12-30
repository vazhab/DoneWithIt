import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import defaultStyles from '../config/styles'
import Screen from './Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Icon from './Icon';
import colors from '../config/colors';

function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          color={colors.medium}
          name="camera"
          size={40}
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: defaultStyles.colors.light,
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default ImageInput;