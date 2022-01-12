import {
  lightBackground,
  contentLight,
  textLightBackgorund,
  darkBackground,
  contentDark,
  textDarkBackground
} from "./variaveis"

export const lightTheme = {
  body: lightBackground,
  inside: contentLight,
  text: textLightBackgorund,
  filter: ''
};

export const darkTheme = {
  body: darkBackground,
  inside: contentDark,
  text: textDarkBackground,
  filter: 'invert(100%)'
};