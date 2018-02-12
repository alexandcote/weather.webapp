import React from "react";
import ReactDOM from "react-dom";

// Apollo
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Components
import App from "containers/App";

// Styles
import "./index.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.REACT_APP_API_HOST ||
      "https://api.meteosherbrooke.com"}/graphql`
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
