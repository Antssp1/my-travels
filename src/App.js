import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Marseille"
          country="France"
          image="https://img.bfmtv.com/c/1256/708/fd2/bdd9b2967761a6eff4f3855834993.jpg"
          distance="1045km"
        />
         <Travel
          destination="New-York"
          country="USA"
          image="https://www.sensationsdumonde.com/img/destination/87/skyline_nyc__empire_state_building__shutterstock_2018_768a.jpg"
          distance="5890km"
        />
        
      </div>
    );
  }
}

export default App;