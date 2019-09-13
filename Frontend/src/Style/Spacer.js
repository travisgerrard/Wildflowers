import React from "react";
import { View, StyleSheet } from "react-native";

import * as C from "./constants";

const S = StyleSheet.create({
  spacingSmall: { width: C.spacingSmall, height: C.spacingSmall },
  spacingMedium: { width: C.spacingMedium, height: C.spacingMedium },
  spacingLarge: { width: C.spacingLarge, height: C.spacingLarge },
  spacingExtraLarge: { width: C.spacingExtraLarge, height: C.spacingExtraLarge },
});

const Spacer = ({ small, medium, large, extraLarge }) => {
  let style = S.spacingMedium;
  if (small) {
    style = S.spacingSmall;
  } else if (medium) {
    style = S.spacingMedium;
  } else if (large) {
    style = S.spacingLarge;
  } else if (extraLarge) {
    style = S.spacingExtraLarge;
  }

  return <View style={style} />;
};

export default Spacer;
