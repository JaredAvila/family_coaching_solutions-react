import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Layout/Layout";
import About from "./Containers/About/About";
import Landing from "./Containers/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Landing} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
