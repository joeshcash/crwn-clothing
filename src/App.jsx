import React, { Component, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./store/reducers/user/user.selectors";

import { checkUserSession } from "./store/reducers/user/user.actions";

import CheckoutContainer from "./pages/checkout/checkout.container";
import HeaderContainer from "./components/Header/Header.container";
import ShopContainer from "./pages/shop/shop.container";

import Homepage from "./pages/homepage/homepage";
import AuthPage from "./pages/auth/auth";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopContainer} />
        <Route
          exact
          path="/signIn"
          render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
        />
        <Route exact path="/checkout" component={CheckoutContainer} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
