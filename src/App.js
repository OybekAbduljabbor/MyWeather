import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import "./App.css";
import { Pogoda } from "./Pogoda/pogoda";
function App(params) {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/pogoda">
            <Pogoda />
          </Route>

          <Route path="/kontackt">
            <Pogoda />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
