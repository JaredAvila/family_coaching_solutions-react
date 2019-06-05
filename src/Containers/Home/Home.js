import React from "react";

import Services from "../../Components/Services/Services";
import CTA from "../../Components/CTA/CTA";
import Connect from "../../Components/Connect/Connect";
import Landing from "../../Components/Landing/Landing";

const Home = () => {
  return (
    <div>
      <Landing />
      <Services />
      <CTA />
      <Connect />
    </div>
  );
};

export default Home;
