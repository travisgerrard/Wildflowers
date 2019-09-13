import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import * as C from './constants';

import Text from './Text';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    color: 'black',
    textAlign: 'center',
    padding: 5,
    backgroundColor: C.colorBackgroundThemeBlue,
    shadowColor: C.colorBackgroundThemeBlueHarder,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '85%'
  }
});

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
    >
      <Text weightBold>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
