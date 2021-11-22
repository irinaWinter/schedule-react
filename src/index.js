import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./assets/styles/styles.scss";

import AppHeader from "./components/AppHeader";

export default class App extends Component {

  render() {
    return (
      <div>
        <AppHeader onSearchChange={this.onSearchChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
