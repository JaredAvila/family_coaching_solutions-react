import React from "react";

import Services from "../../Components/Services/Services";
import CTA from "../../Components/CTA/CTA";
import Contact from "../../Components/Contact/Contact";
import Landing from "../../Components/Landing/Landing";

const Home = () => {
  return (
    <div>
      <Landing />
      <Services />
      <CTA />
      <Contact />
    </div>
  );
};

export default Home;
