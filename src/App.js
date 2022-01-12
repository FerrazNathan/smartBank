import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/UI/themes";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTheme } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme((theme) => !theme)
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <SwitcherTheme theme={theme}/>
      </BtnTheme>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
