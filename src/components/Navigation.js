import React from "react";
import Intro from "./Intro";
import Icons from "./Icons";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-background">
        <div className="nav-header">
          <div>
            <nav className="nav">
              <div className="nav__content">
                <a href="#home" className="nav__item">
                  <h4>Home</h4>
                </a>
                <a href="#portfolio" className="nav__item">
                  <h4>Portfolio</h4>
                </a>
                <a href="#about-me" className="nav__item">
                  <h4>About</h4>
                </a>
                <a href="#contact" className="nav__item">
                  <h4>Contact</h4>
                </a>
              </div>
            </nav>
          </div>
          <Icons />
        </div>
        <Intro />
      </div>
    );
  }
}

export default Navigation;
