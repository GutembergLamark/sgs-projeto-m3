import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "./contexts";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={false}>
      <Provider>
        <Router>
          <App />
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
