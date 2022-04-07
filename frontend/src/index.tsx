import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { render } from "react-dom";
import App from "./app";

const client = new ApolloClient({
  uri: "http://localhost:3000",
  cache: new InMemoryCache(),
});

const root = document.getElementById("root");

render(
  <ApolloProvider client={client}>
    <App />  
  </ApolloProvider>,
  root
);
