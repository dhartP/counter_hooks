import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Counter />
        <CounterHooks />
      </div>
    );
  }
}

export default App;
