import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
