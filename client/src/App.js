import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Offer from "./components/layout/Offer";
import Routes from "./components/Routing/Routes";
import Footer from "./components/layout/Footer";
import M from "materialize-css/dist/js/materialize.min.js";
// import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

function App() {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
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
            <Route component={Routes} />
          </Switch>

          <Footer></Footer>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
