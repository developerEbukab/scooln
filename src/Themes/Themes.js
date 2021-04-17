import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#FFF",
  greyLight: "#f2f2f2",
  greyMedium: "#D7D7D7",
  highlight: "#ffffff",
  fontColor: "#18191A",
  shadow: "#ccc",
  shadowLight: "#f8f8f8",
  white: "#fff",
  black: "#000",
  textHighlight: "#000",
  primaryColor: "#801936",
  primaryColorDark: "#591125",
  primaryColorLight: "#F0E2E6"
}

export const darkTheme = {
  body: "#18191A",
  fontColor: "#d0d0d0",
  shadow: "#080808",
  highlight: "#242727",
  textHighlight: "#fff",
  white: "#fff",
  black: "#000",
  primaryColor: "#801936",
  primaryColorLight: "#F0E2E6"
}

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
    transition: background-color 1s ease;
  }
`;