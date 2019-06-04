import React from "react";

import NavItem from "./NavItem/NavItem";

const NavItems = () => {
  return (
    <ul>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/about">About</NavItem>
    </ul>
  );
};

export default NavItems;
