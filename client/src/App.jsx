import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./store/reducers/user/user.selectors";

import { checkUserSession } from "./store/reducers/user/user.actions";

import HeaderContainer from "./components/Header/Header.container";

import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import { GlobalStyle } from "./global.styles";

const ShopContainer = lazy(() => import("./pages/shop/shop.container"));
const CheckoutContainer = lazy(() =>
  import("./pages/checkout/checkout.container")
);
const Homepage = lazy(() => import("./pages/homepage/homepage"));
const AuthPage = lazy(() => import("./pages/auth/auth"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <HeaderContainer />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopContainer} />
            <Route
              exact
              path="/signIn"
              render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
            />
            <Route exact path="/checkout" component={CheckoutContainer} />
          </Suspense>
        </ErrorBoundary>
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
