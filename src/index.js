import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import Client from "./Apollo/Client";
import { Reset } from "styled-reset";

ReactDOM.render(
  <React.StrictMode>
    <Reset />

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
