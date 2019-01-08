import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "../../store/actions/authActions";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
import Register from "./auth/Register";
import PrivateRoute from "./private-route/PrivateRoute";
import store from "../../store/store";
import setAuthToken from "../../utils/setAuthToken";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class LoginContainer extends Component {
  render() {
    return (
      <Router>
        <div className="LoginContainer">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default LoginContainer;
