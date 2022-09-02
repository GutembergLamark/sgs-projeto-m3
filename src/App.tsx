import React from "react";
import DashboardDoctor from "./pages/DashboardDoctor";
import "./App.css";
import { GlobalStyle } from "./styles/reset";
import { HomePaciente } from "./pages/HomePacient";
import { PageAllergiesPacient } from "./pages/PageAllergiesPacient";
import Login from "./pages/login";
function App() {
  return (
    
    <div className="App">
      <GlobalStyle />
      <Login/>
    </div>
  );
}

export default App;
