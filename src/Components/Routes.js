import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Best30 from "../Routes/Best30";
import Lookbook from "../Routes/Lookbook";
import Sale from "../Routes/Sale";
import Shop from "../Routes/Shop";
import Community from "../Routes/Community";
import Account from "../Routes/Account";
import Cart from "../Routes/Cart";

const APP = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/best30" component={Best30} />
      <Route exact path="/lookbook" component={Lookbook} />
      <Route exact path="/sale" component={Sale} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/community" component={Community} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </Router>
);

export default APP;
