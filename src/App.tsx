import React from "react";
import DashboardDoctor from "./pages/DashboardDoctor";
import "./App.css";
import { GlobalStyle } from "./styles/reset";

function App() {
  return (
    <div className="App">
      <DashboardDoctor />
      <GlobalStyle />
    </div>
  );
}

export default App;
