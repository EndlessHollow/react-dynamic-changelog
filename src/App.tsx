import React from "react";
import GlobalStyle from "./utils/global-style";

import { Dashboard } from "./modules/dashboard/Dashboard";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  );
};

App.displayName = "App";

export default App;
