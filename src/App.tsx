import React from "react";
import Router from "./Routes";
import { GlobalStyle } from "./styles/reset";

import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
