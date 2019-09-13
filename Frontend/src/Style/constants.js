// constants.js

import { Dimensions } from "react-native";
import Color from "color";

const window = Dimensions.get("window");
export const windowWidth = window.width;
export const windowHeight = window.height;

export const colorBackgroundThemeGreen = "rgba(0, 162, 97, 1)";
export const colorBackgroundThemeBlue = "rgba(1, 121, 213, 1)";

export const colorBackgroundLight = "rgba(255, 255, 255, 1)";
export const colorBackgroundDark = "rgba(10, 10, 10, 1)";

export const colorBackgroundThemeGreenSoft = Color(colorBackgroundThemeGreen)
  .lighten(0.25)
  .rgb()
  .string(2);
export const colorBackgroundThemeGreenSofter = Color(colorBackgroundThemeGreen)
  .lighten(0.5)
  .rgb()
  .string(2);
export const colorBackgroundThemeGreenHard = Color(colorBackgroundThemeGreen)
  .darken(0.25)
  .rgb()
  .string(2);
export const colorBackgroundThemeGreenHarder = Color(colorBackgroundThemeGreen)
  .darken(0.5)
  .rgb()
  .string(2);

export const colorBackgroundThemeBlueSoft = Color(colorBackgroundThemeBlue)
  .lighten(0.25)
  .rgb()
  .string(2);
export const colorBackgroundThemeBlueSofter = Color(colorBackgroundThemeBlue)
  .lighten(0.5)
  .rgb()
  .string(2);
export const colorBackgroundThemeBlueHard = Color(colorBackgroundThemeBlue)
  .darken(0.25)
  .rgb()
  .string(2);
export const colorBackgroundThemeBlueHarder = Color(colorBackgroundThemeBlue)
  .darken(0.5)
  .rgb()
  .string(2);

export const colorBackgroundLightDark = Color(colorBackgroundLight)
  .darken(0.25)
  .rgb()
  .string(2);
export const colorBackgroundLightDarker = Color(colorBackgroundLight)
  .darken(0.5)
  .rgb()
  .string(2);

export const colorBackgroundDarkLight = Color(colorBackgroundDark)
  .lighten(0.25)
  .rgb()
  .string(2);
export const colorBackgroundDarkLighter = Color(colorBackgroundDark)
  .lighten(0.5)
  .rgb()
  .string(2);

export const colorTextThemeGreen = "rgba(0, 162, 97, 1)";
export const colorTextThemeBlue = "rgba(1, 121, 213, 1)";
export const colorTextLight = "rgba(255, 255, 255, 0.9)";
export const colorTextDark = "rgba(0, 0, 0, 0.9)";

export const colorTextLightSoft = Color(colorTextLight)
  .fade(0.3)
  .rgb()
  .string(2);
export const colorTextLightSofter = Color(colorTextLight)
  .fade(0.5)
  .rgb()
  .string(2);

export const colorTextDarkSoft = Color(colorTextDark)
  .fade(0.3)
  .rgb()
  .string(2);
export const colorTextDarkSofter = Color(colorTextDark)
  .fade(0.5)
  .rgb()
  .string(2);

export const spacingSmall = 4;
export const spacingMedium = 8;
export const spacingLarge = 16;
export const spacingExtraLarge = 32;

export const fontSizeExtraSmall = 8;
export const fontSizeSmall = 12;
export const fontSizeMedium = 16;
export const fontSizeLarge = 20;
export const fontSizeExtraLarge = 24;

export const fontWeightLight = "100";
export const fontWeightNormal = "500";
export const fontWeightBold = "900";
