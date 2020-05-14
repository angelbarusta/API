import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import reduce from "./redux/reducer";
import App from "./components/App";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  myList: [],
};

const store = createStore(reduce, initialState, composeEnhancers());
const container = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  container
);
