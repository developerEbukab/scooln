import './App.css';
import './sass/main.scss';
import { lightTheme, darkTheme, GlobalStyles } from './Themes/Themes';
import { AppContainer } from "./App.styles";
import { ThemeProvider } from "styled-components";

import { useState } from "react";
import Home from './Pages/Home/Home.component';

const App = () => {
  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer >
        <Home/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
