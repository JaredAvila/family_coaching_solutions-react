import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Layout/Layout";
import About from "./Containers/About/About";
import Home from "./Containers/Home/Home";
import Services from "./Containers/Services/Services";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
