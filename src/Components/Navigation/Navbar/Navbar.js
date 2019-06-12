import React from "react";

import Logo from "../../Logo/Logo";
import NavItem from "./NavItem/NavItem";

import classes from "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className={classes.Navbar}>
        <div className={classes.Logo}>
          <Logo />
          <ul className={classes.List}>
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
};

export default Navbar;
