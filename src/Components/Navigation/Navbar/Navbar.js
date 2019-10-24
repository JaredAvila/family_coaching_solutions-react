import React, { Component } from "react";

import Logo from "../../Logo/Logo";
import NavItem from "./NavItem/NavItem";

import classes from "./Navbar.css";
import Backdrop from "../../../UI/Backdrop";
import animate from "../../../UI/Animations.css";

class Navbar extends Component {
  state = {
    open: false
  };

  menuOpenedHandler = () => {
    this.setState({
      open: true
    });
  };

  menuClosedHandler = () => {
    this.setState({
      open: false
    });
  };

  toggleMenu = () => {
    this.setState(prevState => {
      const open = prevState["open"];
      return { open };
    });
  };

  render() {
    let logoClasses = [classes.Logo];
    let listClasses = [classes.List];
    let containerClasses = [animate.NavFader, classes.Navbar];
    if (this.state.open) {
      logoClasses = [classes.Logo, classes.Open];
      listClasses = [classes.List, classes.ListOpen];
    }
    return (
      <header>
        <Backdrop open={this.state.open} click={this.menuClosedHandler} />
        <nav className={containerClasses.join(" ")}>
          <div
            onMouseEnter={this.menuOpenedHandler}
            onMouseLeave={this.menuClosedHandler}
            onClick={this.toggleMenu}
            className={logoClasses.join(" ")}
          >
            <Logo />
            <ul
              onClick={this.menuClosedHandler}
              className={listClasses.join(" ")}
            >
              <NavItem link="/">Home</NavItem>
              <NavItem link="/about">About</NavItem>
              <NavItem link="/services">Services</NavItem>
              <NavItem outside link="https://www.jaredavila.com/staging-site">
                Blog
              </NavItem>
              <NavItem link="/contact">Contact</NavItem>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
