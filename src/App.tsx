import React from "react";
import DashboardDoctor from "./pages/DashboardDoctor";
import "./App.css";
import { GlobalStyle } from "./styles/reset";
import { HomePaciente } from "./pages/HomePacient";
import { PageAllergiesPacient } from "./pages/PageAllergiesPacient";
import Login from "./pages/Login";
import RegisterProvider from "./contexts/RegisterProvider";
function App() {
  return (
    <RegisterProvider>

    <div className="App">
      <GlobalStyle />
      <Login/>
    </div>
    </RegisterProvider>
  );
}

export default App;
