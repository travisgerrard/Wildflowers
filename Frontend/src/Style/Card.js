import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as C from './constants';
import Spacer from './Spacer';

const Card = props => {
  return (
    <View>
      <View style={[styles.card, props.style]}>{props.children}</View>
      <Spacer extraLarge />
    </View>
  );
};

export default Card;

const CARDWIDTH = 250;
const styles = StyleSheet.create({
  card: {
    width: CARDWIDTH,
    height: CARDWIDTH,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,
    backgroundColor: C.colorBackgroundThemeGreenSofter,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    marginRight: 15,
    marginLeft: 15
  }
});
