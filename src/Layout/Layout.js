import React, { Fragment } from "react";

import Navbar from "../Components/Navigation/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Backdrop from "../UI/Backdrop";

const Layout = props => {
  return (
    <Fragment>
      <Backdrop />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
