import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateUserPage from "pages/create-user";
import HomePage from "pages/home";
import Layout from "components/Layout";

export default function App() {
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreateUserPage} />
        </Switch>
      </Layout>
    </div>
  );
}
