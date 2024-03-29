import React from "react";
import logo from "../logo.svg";

const Page3 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <button onClick={() => onRouteChange("Page1")}>Page1</button>
    <button onClick={() => onRouteChange("Page2")}>Page2</button>
    <button disabled>Page3</button>
  </div>
);

export default Page3;
