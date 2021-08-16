import React from "react";
import Root from "./modules/Root";

import GlobalStyles from "./shared/styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <Root />
      <GlobalStyles />
    </>
  );
};

export default App;
