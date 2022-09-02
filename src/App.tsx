import "./App.css";
import Register from "./pages/Register";
import React from "react";
import DashboardDoctor from "./pages/DashboardDoctor";
import "./App.css";
import { GlobalStyle } from "./styles/reset";
import { HomePaciente } from "./pages/HomePacient";
import { PageAllergiesPacient } from "./pages/PageAllergiesPacient";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <DashboardDoctor /> */}
      {/* <HomePaciente /> */}
      <PageAllergiesPacient />
      <GlobalStyle />
    </div>
  );
}

export default App;
