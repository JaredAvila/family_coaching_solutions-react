import React from "react";

import Services from "../../Components/Services/Services";
import CTA from "../../Components/CTA/CTA";
import Connect from "../../Components/Connect/Connect";
import Landing from "../../Components/Landing/Landing";
import Testimonials from "../../Components/Testimonials/Testimonials";

import animate from "../../UI/Animations.css";

const Home = () => {
  return (
    <div className={animate.FadeIn}>
      <Landing />
      <Testimonials />
      <Services />
      <CTA />
      <Connect />
    </div>
  );
};

export default Home;
