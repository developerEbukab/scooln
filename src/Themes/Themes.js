import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#F7FAFC",
  fontColor: "#18191A"
}

export const darkTheme = {
  body: "#18191A",
  fontColor: "#efefef"
}

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
    transition: background-color 1s ease;
  }
`;