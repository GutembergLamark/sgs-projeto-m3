import React from "react";
import Router from "./routes";
import { GlobalStyle } from "./styles/reset";

import RegisterProvider from "./contexts/RegisterProvider";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>

  );
}

export default App;
