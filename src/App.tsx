import React from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./modules/Root";

import GlobalStyles from "./shared/styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
