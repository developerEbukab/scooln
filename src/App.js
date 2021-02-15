import './App.css';
import './sass/main.scss';
import { lightTheme, darkTheme, GlobalStyles } from './Themes/Themes';
import { AppContainer } from "./App.styles";
import { ThemeProvider } from "styled-components";

import { useState } from "react";
import { Switch ,Route } from "react-router-dom";
import Home from './Pages/Home/Home.component';
import Header from './Components/Header/Header.component';
import Intro from './Components/Intro/Intro.component';

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <Intro/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
