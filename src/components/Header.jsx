import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";


import "../assets/styles/Header.scss";

const Header = () => (
<Router>
  <div className="">
      <header>
        <h2 className="header-logo-text">the planets</h2>
        <div className="header-menu-list">
          <ul className="header-menu-items">
            <li>
              <Link to="/"> Mercury </Link>
            </li>
            <li>
              <Link to="/venus"> Venus </Link>
            </li>
            <li>
              <Link to="/earth"> Earth </Link>
            </li>
            <li>
              <Link to="/mars"> MArs </Link>
            </li>
            <li>
              <Link to="/jupiter"> Jupiter </Link>
            </li>
            <li>
              <Link to="/saturn"> Saturn </Link>
            </li>
            <li>
              <Link to="/uranus"> Uranus </Link>
            </li>
            <li>
              <Link to="/neptune"> Neptune </Link>
            </li>
          </ul>
        </div>
      </header>
      <hr />
  </div>

    <Route exact path="/" component={Mercury} />
    <Route exact path="/venus" component={Venus} />
    <Route exact path="/earth" component={Earth} />
    <Route exact path="/mars" component={Mars} />
    <Route exact path="/jupiter" component={Jupiter} />
    <Route exact path="/saturn" component={Saturn} />
    <Route exact path="/uranus" component={Uranus} />
    <Route exact path="/neptune" component={Neptune} />
</Router>
);

export default Header;
