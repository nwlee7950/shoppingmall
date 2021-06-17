import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Best30 from "../Routes/Best30";

const APP = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/best30" component={Best30} />
    </Switch>
  </Router>
);

export default APP;
