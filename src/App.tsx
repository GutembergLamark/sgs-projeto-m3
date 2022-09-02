import React from "react";
import { PageAllergiesPacient } from "./pages/PageAllergiesPacient";
import Router from "./routes";
import { GlobalStyle } from "./styles/reset";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <DashboardDoctor /> */}
      {/* <HomePaciente /> */}
      {/* <PageAllergiesPacient /> */}
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
