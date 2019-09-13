import React from 'react';
import { View, StyleSheet } from 'react-native';

import * as C from '../Style/constants';

const ModalContainer = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    textAlign: 'center',
    backgroundColor: 'rgba(50, 115, 220, 0.2)'
  }
});
