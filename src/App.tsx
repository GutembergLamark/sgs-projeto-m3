import React from "react";
import DashboardDoctor from "./pages/DashboardDoctor";
import "./App.css";
import { GlobalStyle } from "./styles/reset";
import { HomePaciente } from "./pages/HomePaciente";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Login/>
      <GlobalStyle />
    </>
  );

}

export default App;
