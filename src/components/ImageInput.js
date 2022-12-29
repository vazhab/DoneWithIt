import React from 'react';
import { View, StyleSheet } from 'react-native';

import defaultStyles from '../config/styles'
import Screen from './Screen';
import Icon from './Icon';

const ImageInput = ({ }) => {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="camera"
        size={80}
        backgroundColor={defaultStyles.colors.light}
        iconColor={defaultStyles.colors.medium}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: 80,
    height: 80,
    backgroundColor: defaultStyles.colors.light,
    justifyContent: 'center',
    borderRadius: 20
  },
  icon: {
    alignSelf: 'center',
  }
});

export default ImageInput;