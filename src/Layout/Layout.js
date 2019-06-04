import React, { Fragment } from "react";

import Navbar from "../Components/Navigation/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = props => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
