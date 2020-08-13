import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Offer from "./components/layout/Offer";
import Delivery from "./components/layout/Delivery";
import Contact from "./components/layout/Contact";
import Login from "./components/layout/Login";
import Register from "./components/layout/Register";
import Wishlist from "./components/layout/Wishlist";
import Cart from "./components/layout/Cart";
import Details from "./components/layout/Details";
import Footer from "./components/layout/Footer";
import M from "materialize-css/dist/js/materialize.min.js";
// import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Offer} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route exact path="/cart" component={Cart} />
          </Switch>

          <Footer></Footer>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
