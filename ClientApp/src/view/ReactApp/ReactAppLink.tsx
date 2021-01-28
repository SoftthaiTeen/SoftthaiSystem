import React from "react";
import logo from "./logo.svg";
import "./AppLink.css";
import { Link } from "react-router-dom";

function ReactAppLink() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={"/"} className="App-link">
          Home
        </Link>
      </header>
    </div>
  );
}

export default ReactAppLink;
