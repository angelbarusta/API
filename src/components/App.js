import React from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
