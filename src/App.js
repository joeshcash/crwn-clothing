import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";

import Header from "./components/Header/Header";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import AuthPage from "./pages/authpages/AuthPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
