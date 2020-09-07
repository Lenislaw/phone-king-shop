import React from "react";
import { Route, Switch } from "react-router-dom";
import Delivery from "../layout/Delivery";
import Contact from "../layout/Contact";
import Login from "../layout/Login";
import Register from "../layout/Register";
import Cart from "../layout/Cart";
import Details from "../layout/Details";
import Dashboard from "../layout/Dashboard";
import NotFound from "../layout/NotFound";
import PrivateRoute from "../Routing/PrivateRoute";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/details/:id" component={Details} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/cart" component={Cart} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route path="*" exact={true} component={NotFound} />
    </Switch>
  );
};
export default Routes;
