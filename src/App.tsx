import React from "react";
import Router from "./routes";
import { GlobalStyle } from "./styles/reset";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>

  );
}

export default App;
