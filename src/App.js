import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Articles from "./Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route exact path="/" component={Articles} />
        <Route exact path="/" component={About} />

        <div className="navigation">
          <div className="navigation=sub">
            <Link to="/Projects" className="item">
              Projects
            </Link>
            <Link to="/Articles" className="item">
              Articles
            </Link>
            <Link to="/About" className="item">
              About
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
