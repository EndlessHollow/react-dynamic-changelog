import React from "react";
import { ThemeProvider } from "styled-components";
import { Dashboard } from "./modules/dashboard/Dashboard";
import GlobalStyle from "./utils/global-style";
import theme from "./utils/theme";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
};

App.displayName = "App";

export default App;
