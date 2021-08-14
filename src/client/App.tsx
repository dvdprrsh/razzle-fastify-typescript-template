import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
