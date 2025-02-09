import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="#">
          Weather PROJECT
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="#">
          Aryansah10
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
