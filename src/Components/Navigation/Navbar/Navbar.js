import React, { Component } from "react";

import Logo from "../../Logo/Logo";
import NavItem from "./NavItem/NavItem";

import classes from "./Navbar.css";
import Backdrop from "../../../UI/Backdrop";

class Navbar extends Component {
  state = {
    open: false,
    logoClasses: [classes.Logo],
    listClasses: [classes.List]
  };

  menuOpenedHandler = () => {
    this.setState({
      open: true,
      logoClasses: [classes.Logo, classes.Open],
      listClasses: [classes.List, classes.ListOpen]
    });
  };
  menuClosedHandler = () => {
    this.setState({
      open: false,
      logoClasses: [classes.Logo]
    });
  };

  render() {
    return (
      <header>
        <Backdrop open={this.state.open} click={this.menuClosedHandler} />
        <nav className={classes.Navbar}>
          <div
            onMouseEnter={this.menuOpenedHandler}
            onMouseLeave={this.menuClosedHandler}
            className={this.state.logoClasses.join(" ")}
          >
            <Logo />
            <ul className={this.state.listClasses.join(" ")}>
              <NavItem link="/">Home</NavItem>
              <NavItem link="/about">About</NavItem>
              <NavItem link="/services">Services</NavItem>
              <NavItem link="/about">Blog</NavItem>
              <NavItem link="/about">Contact</NavItem>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
