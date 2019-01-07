import React, { Component } from "react";

import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import AppLogin from "../Components/appLogin/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <AppLogin />
        <Main />
      </div>
    );
  }
}

export default App;
