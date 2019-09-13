// Text.js

import React from 'react';
import { Text as RNText } from 'react-native';

import * as C from './constants';

const Text = ({
  sizeExtraSmall,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  sizeExtraLarge,

  colorThemeBlue,
  colorThemeGreen,
  colorDark,
  colorDarkSoft,
  colorDarkSofter,
  colorLight,
  colorLightSoft,
  colorLightSofter,

  weightLight,
  weightNormal,
  weightBold,

  style,
  ...props
}) => {
  let fontSize = C.fontSizeMedium;
  if (sizeExtraSmall) {
    fontSize = C.fontSizeExtraSmall;
  } else if (sizeSmall) {
    fontSize = C.fontSizeSmall;
  } else if (sizeMedium) {
    fontSize = C.fontSizeMedium;
  } else if (sizeLarge) {
    fontSize = C.fontSizeLarge;
  } else if (sizeExtraLarge) {
    fontSize = C.fontSizeExtraLarge;
  }

  let color = C.colorTextDark;
  if (colorThemeBlue) {
    color = C.colorTextThemeBlue;
  } else if (colorThemeGreen) {
    color = C.colorTextThemeGreen;
  } else if (colorDark) {
    color = C.colorTextDark;
  } else if (colorDarkSoft) {
    color = C.colorTextDarkSoft;
  } else if (colorDarkSofter) {
    color = C.colorTextDarkSofter;
  } else if (colorLight) {
    color = C.colorTextLight;
  } else if (colorLightSoft) {
    color = C.colorTextLightSoft;
  } else if (colorLightSofter) {
    color = C.colorTextLightSofter;
  }

  let fontWeight = C.fontWeightNormal;
  if (weightLight) {
    fontWeight = C.fontWeightLight;
  } else if (weightNormal) {
    fontWeight = C.fontWeightNormal;
  } else if (weightBold) {
    fontWeight = C.fontWeightBold;
  }

  return <RNText style={[{ fontSize, color, fontWeight }, style]} {...props} />;
};

export default Text;
