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
import movileMenu from "../assets/img/icon-hamburger.svg";
import iconChevron from "../assets/img/icon-chevron.svg";
const Header = () => {
  const myFunction = (e) => {
    console.log("oe");
    e.preventDefault();
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <Router>
      <div className="">
        <div className="menu">
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
        </div>
        <div className="menu-responsive">
          <h2 className="header-logo-text header-logo-movile">the planets</h2>
          <a href="#" className="icon" onClick={myFunction}>
            <img src={movileMenu} alt="" />
          </a>
        </div>
        <hr />
        <div className="topnav" id="myTopnav">
          <div className="menu-responsive-items">
            <div className="menu-responsive-item">
              <div className="menu-item-name">
                <div className="circle mercury"></div>
                <Link to="/"> Mercury </Link>
              </div>
              <img src={iconChevron} alt="" />
            </div>
            <div className="menu-responsive-item">
              <div className="menu-item-name">
                <div className="circle venus"></div>
                <Link to="/venus"> Venus </Link>
              </div>
              <img src={iconChevron} alt="" />
            </div>
            <div className="menu-responsive-item">
              <div className="menu-item-name">
                <div className="circle earth"></div>
                <Link to="/earth"> Earth </Link>
              </div>
              <img src={iconChevron} alt="" />
            </div>
            <div className="menu-responsive-item">
              <div className="menu-item-name">
                <div className="circle mars"></div>
                <Link to="/mars"> MArs </Link>
              </div>
              <img src={iconChevron} alt="" />
            </div>
            <div className="menu-responsive-item">
              <div className="menu-item-name">
                <div className="circle jupiter"></div>
                <Link to="/jupiter"> Jupiter </Link>
              </div>
              <img src={iconChevron} alt="" />
            </div>
            <div className="menu-responsive-item">
              <div className="menu-item-name">
                <div className="circle saturn"></div>
                <Link to="/saturn"> Saturn </Link>
              </div>
              <img src={iconChevron} alt="" />
            </div>
            <div className="menu-responsive-item">
              <div className="menu-item-name">
                <div className="circle uranus"></div>
                <Link to="/uranus"> Uranus </Link>
              </div>
              <img src={iconChevron} alt="" />
            </div>
            <div className="menu-responsive-item">
              <div className="menu-item-name">
                <div className="circle neptune"></div>
                <Link to="/neptune"> Neptune </Link>
              </div>
              <img src={iconChevron} alt="" />
            </div>
            
          </div>
        </div>
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
};

export default Header;
