import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const Navbar = () => {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default Navbar;
